import React from 'react';
import styled from 'styled-components';

const StyledView = styled.article`
  padding: 20px;
`;

// todo move to ./types
type WithChildren<T = unknown> = T & { children?: React.ReactNode };
type ViewProps = WithChildren;

export const TheContent = ({ children }: ViewProps) => (
  <StyledView className='right'>{children}</StyledView>
);
