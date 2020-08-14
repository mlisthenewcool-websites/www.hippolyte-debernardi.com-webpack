import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import styled from 'styled-components';

import { MyRouteProps } from '../../@types';

import { TheContainer } from './TheContainer';
import { TheHeader } from './TheHeader';
// import { TheMenu } from './TheMenu';
import { TheSidebar } from './TheSidebar';
import { TheContent } from './TheContent';

const TheStyledApp = styled.div`
  max-width: ${(props) => props.theme.content.width}px;
  margin: auto;
  text-align: justify;

  height: 100%;

  /**
   * ===========================================================================
   * Links.
   * ===========================================================================
   */

  a {
    color: ${(props) => props.theme.colors.link};
    text-decoration: none;

    :hover {
      /* text-decoration: line-through; */
    }
  }

  /**
   * ===========================================================================
   * Flex global helpers to have two big boxes.
   * ===========================================================================
   */

  .left,
  .right {
    flex-direction: column;
    align-self: stretch;
    align-items: center;
    justify-content: center;
  }

  header .left {
    flex: 2;
    display: flex;
  }
  header .right {
    flex: 5;
    display: none;
  }

  main .left {
    flex: 2;
    display: none;
  }
  main .right {
    flex: 5;
    display: flex;
  }

  @media (min-width: ${(props) => props.theme.media.screenBP}px) {
    header .right {
      display: flex;
    }
    main .left {
      display: none;
    }
  }
`;

// todo move to types
interface TheAppProps {
  routes: MyRouteProps[];
}

// =============================================================================
// TODO : move
const isAuthenticated = () => false;

const LoginButton = () => (
  <button type='button' onClick={(): boolean => false}>
    Get JWT
  </button>
);

/**
 * Component in charge to render the route asked by client.
 *
 * @param component
 * @param path
 * @param exact
 * @param isProtected
 * @param isAuthenticated
 * @constructor
 */
const TheRouteRenderer = ({
  component,
  path,
  exact,
  isProtected,
}: MyRouteProps) => {
  if (isProtected) {
    return isAuthenticated() ? (
      <Route exact={exact} component={component} path={path} />
    ) : (
      <Route component={LoginButton} render={undefined} />
    );
  }

  return <Route exact={exact} component={component} path={path} />;
};

export const TheApp = ({ routes }: TheAppProps) => (
  <TheStyledApp>
    {/* Set browser router at app's root to use links wherever you want */}
    <BrowserRouter>
      <TheHeader routes={routes} />
      {/* <TheMenu routes={routes}/> */}

      <TheContainer>
        <TheSidebar />

        {/* Rendering matched routes */}
        <TheContent>
          <Switch>
            {routes.map((route: MyRouteProps) => (
              // todo care about giving breadcrumb as key
              <TheRouteRenderer
                key={route.breadcrumb}
                component={route.component}
                path={route.path}
                exact={route.exact}
                breadcrumb={route.breadcrumb}
                isProtected={route.isProtected}
              />
            ))}
          </Switch>
        </TheContent>
      </TheContainer>
    </BrowserRouter>
  </TheStyledApp>
);
