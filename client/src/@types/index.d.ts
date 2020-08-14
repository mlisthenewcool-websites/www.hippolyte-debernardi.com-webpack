import { RouteProps, RouteComponentProps } from 'react-router-dom';
import * as React from 'react';

// =============================================================================
// Routing
// =============================================================================
export interface MyRouteProps extends RouteProps {
  // Override next properties to ensure they are passed.
  // eslint-disable-next-line max-len, @typescript-eslint/no-explicit-any
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
  path: string;
  exact: boolean;

  // custom properties
  breadcrumb: string;
  isProtected: boolean;
}

// =============================================================================
// Style
// =============================================================================
export interface MyThemeProps {
  media: {
    screenBP: number;
  };

  colors: {
    background: string;
    font: string;
    link: string;
  };

  header: {
    height: number;
  };

  content: {
    width: number;
  };

  fonts: {
    family: string;
    size: number;
  };
}

// =============================================================================
//
// ============================================================================
export interface MyLinkProps {
  link: string;
  label: string;
  icon: React.ReactNode;
}

/* Fonts  */
// used to extends custom theme in order to use
// `createGlobalStyle` function

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends MyThemeProps {}
}
