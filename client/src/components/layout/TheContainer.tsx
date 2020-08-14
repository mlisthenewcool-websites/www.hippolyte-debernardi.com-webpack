import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.main`
  height: calc(100vh - (${(props) => props.theme.header.height} + 3) px);

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: auto;
`;

/*
  /* Mobile first. Display on full columns on small screens. //
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;

  overflow: auto;
 */

/*
  .left {
    display: none; /* Hide sidebar on small screen. //
    border-bottom: solid 3px ${(props) => props.theme.colors.font};
  }

  @media (min-width: ${(props) => props.theme.media.screenBP}) {
    flex-direction: row;

    .left {
      display: inline; /* display breadcrumbs & sidebar //
      border-right: solid 3px ${(props) => props.theme.colors.font};
      border-bottom: none;
    }
  }
 */

// todo move to ./types
type WithChildren<T = unknown> = T & { children?: React.ReactNode };
type ContentProps = WithChildren;

export const TheContainer = ({ children }: ContentProps) => (
  <StyledContainer>{children}</StyledContainer>
);
