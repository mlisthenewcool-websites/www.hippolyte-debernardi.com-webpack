// visit doc at https://github.com/icd2k3/use-react-router-breadcrumbs
import React from 'react';
import { Link } from 'react-router-dom';

import useBreadcrumbs from 'use-react-router-breadcrumbs';

import styled from 'styled-components';
import { MyRouteProps } from '../../@types';

const StyledHeader = styled.header`
  height: ${(props) => props.theme.header.height}px;
  min-height: ${(props) => props.theme.header.height}px;
  border-bottom: solid 3px ${(props) => props.theme.colors.font};

  display: flex;
  align-items: center;
  justify-content: center;
`;

/*
  div {
    padding: 20px;
  }
 */

interface MyHeaderProps {
  routes: MyRouteProps[];
}

export const TheHeader = ({ routes }: MyHeaderProps) => {
  const breadcrumbs = useBreadcrumbs(routes, {
    disableDefaults: true,
    // excludePaths: ['/']
  });

  return (
    <StyledHeader>
      <nav className='left'>
        <Link to='/'>Hippolyte Debernardi</Link>
      </nav>

      <nav className='right'>
        {breadcrumbs.map(({ match, breadcrumb }: any) => (
          <Link key={match.url} to={match.url}>
            {breadcrumb}
          </Link>
        ))}
      </nav>
    </StyledHeader>
  );
};

/*
import { Grid, Row, Col } from 'react-flexbox-grid';
  <Row>
    <Col xs={12} md={4}>
      <Link to='/'>Hippolyte Debernardi</Link>
    </Col>

    <Col xs={0} md={8}>
      {breadcrumbs.map(({ match, breadcrumb }) => (
        <Link key={match.url} to={match.url}>
          {breadcrumb}
        </Link>
      ))}
    </Col>
  </Row>
 */
