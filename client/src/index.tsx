import React from 'react';
import ReactDOM from 'react-dom';

// import extra libraries
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';

// import all data
import { myTheme, GlobalStyle, myRoutes } from './data';
import { TheApp } from './components/layout/TheApp'; // myRoutes

ReactDOM.render(
  <React.StrictMode>
    {/* https://reactjs.org/docs/strict-mode.html  */}
    {/* Provide a custom theme to all rendered elements */}
    <ThemeProvider theme={myTheme}>
      {/* Provide style for html and body elements */}
      <GlobalStyle />

      {/* Provide metas */}
      <HelmetProvider>
        <Helmet
          titleTemplate='%s | Hippolyte L. DEBERNARDI'
          defaultTitle='Hippolyte L. DEBERNARDI'
        />
      </HelmetProvider>

      {/* Basically all the things visible for client */}
      <TheApp routes={myRoutes} />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
