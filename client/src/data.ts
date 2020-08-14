import { createGlobalStyle } from 'styled-components';

import GillSansRegular from './assets/fonts/SFUGillSansRegular.woff';
import { MyThemeProps, MyRouteProps } from './@types';
import { About, Notes, Memorial, NotFound, Projects } from './components/views';

export const myRoutes: MyRouteProps[] = [
  {
    path: '/',
    component: About,
    exact: true,
    breadcrumb: 'About',
    isProtected: false,
  },
  {
    path: '/projects',
    component: Projects,
    exact: false,
    breadcrumb: 'Projects',
    isProtected: false,
  },
  {
    path: '/notes',
    component: Notes,
    exact: true,
    breadcrumb: 'Notes',
    isProtected: true,
  },
  {
    path: '/memorial',
    component: Memorial,
    exact: true,
    breadcrumb: 'Memorial',
    isProtected: false,
  },
  {
    path: '*',
    component: NotFound,
    exact: false,
    breadcrumb: '',
    isProtected: false,
  },
];

export const myTheme: MyThemeProps = {
  content: {
    width: 1200,
  },

  header: {
    height: 80,
  },

  colors: {
    background: '#FFFFFF',
    font: '#000000',
    link: '#8b0000',
  },

  fonts: {
    family: 'GillSansRegular',
    size: 20,
  },

  media: {
    screenBP: 768,
  },
};

export const GlobalStyle = createGlobalStyle`
  /* make the page full */
  html,
  body {
    height: 100%;
  }

  body {
    background-color: ${(props) => props.theme.colors.background};
    font-family: ${(props) => props.theme.fonts.family};
    color: ${(props) => props.theme.colors.font};
    font-size: ${(props) => props.theme.fonts.size}px;
    
    margin: 0;                 /* no outside margin for our boxes */
    overflow-wrap: break-word; /* force every child content to fit max-width */
  }
  
  @font-face {
    font-family: 'GillSansRegular';
    src: url(${GillSansRegular}) format('woff');
  }
`;
