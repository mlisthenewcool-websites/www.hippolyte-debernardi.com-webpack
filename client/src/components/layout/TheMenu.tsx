import React, { useState, useRef, useEffect, RefObject } from 'react';
import { NavLink } from 'react-router-dom';

// styles & other components
import styled from 'styled-components';
import { MyRouteProps } from '../../@types';

/**
 * =============================================================================
 * STYLES
 * =============================================================================
 */
const colors = {
  background: '#FFFFFF',
  font: '#000000',
  link: '#8b0000',
};

const StyledMenu = styled.nav<{ open: boolean }>`
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  position: fixed;
  background-color: ${colors.background};
  z-index: 1;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) =>
    open ? 'translate(0, 0)' : 'translate(100%, -100%)'};

  a {
    font-size: 30px;
    text-align: center;
    padding-top: 10px;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const StyledHamburger = styled.button<{ open: boolean }>`
  position: fixed;
  left: ${({ open }) => (open ? '90%' : '90%')};
  top: 3vw;
  width: 2rem;
  height: 2rem;
  padding: 0;
  background: transparent;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  border: none;
  cursor: pointer;
  outline: none;
  z-index: 1;

  @media (max-width: 600px) {
    left: ${(open) => (open ? 'initial' : '3vw')};
    right: ${(open) => (open ? '2vw' : 'initial')};
  }

  span {
    position: relative;
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    transition: all 0.3s linear;
    transform-origin: 1px;
    background-color: ${({ open }) => (open ? colors.link : colors.font)};

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

/**
 * =============================================================================
 * COMPONENTS
 * =============================================================================
 */

// HAMBURGER

type HamburgerProps = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

const TheHamburger = (props: HamburgerProps) => (
  <StyledHamburger open={props.open} onClick={() => props.setOpen(!props.open)}>
    <span />
    <span />
    <span />
  </StyledHamburger>
);

// MENU

const useOnClickOutside = (
  ref: RefObject<HTMLDivElement>,
  closeMenu: () => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (
        ref.current &&
        event.target &&
        ref.current.contains(event.target as Node)
      ) {
        return;
      }
      closeMenu();
    };

    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, closeMenu]);
};

interface MyMenuProps {
  routes: MyRouteProps[];
}

export const TheMenu = ({ routes }: MyMenuProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const node = useRef<HTMLDivElement>(null);

  useOnClickOutside(node, () => setOpen(false));

  return (
    <div ref={node}>
      <StyledMenu open={open}>
        {routes.map((route: MyRouteProps) => (
          // todo care about giving breadcrumb as key
          <NavLink
            key={route.breadcrumb}
            to={route.path.toString()}
            onClick={() => setOpen(false)}
          >
            {route.breadcrumb}
          </NavLink>
        ))}
      </StyledMenu>
      <TheHamburger open={open} setOpen={setOpen} />
    </div>
  );
};
