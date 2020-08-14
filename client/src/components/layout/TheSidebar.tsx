import React from 'react';
import styled from 'styled-components';

// todo, bind to visible
const StyledSidebar = styled.aside`
  display: flex;
`;

/* ------- */
/* BUTTONS */
/* ------- */
/*
.btn-group .button {
  padding: 10px 24px; // Some padding
  cursor: pointer; // Pointer/hand icon
  //width: 50%; // Set a width if needed
  display: block; // Make the buttons appear below each other
  margin-bottom: 1px;

  color: white;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: 0.1rem;
  //text-transform: uppercase;
  //text-decoration: none;
  //white-space: nowrap;
  background-color: transparent;
  border-radius: 4px;
  border: 1px solid #bbb !important;
  //cursor: pointer;
  //box-sizing: border-box;
}

.btn-group .button:not(:last-child) {
  border-bottom: none; // Prevent double borders
}

// Add a background color on hover
.btn-group .button:hover span {
  color: darkred;
}

// SIDEBAR

.container .content .left ul {
  list-style-type: none;
  display: block;
}

.btn-group a {
  letter-spacing: 0.1rem;
  background-color: transparent;
  //border-radius: 4px;
  //border: 1px solid #bbb !important;
  // padding: 10px;
  //white-space: nowrap;
  display: inline-block;
  text-align: center;
}

// https://stackoverflow.com/questions/11078509/how-to-increase-the-clickable-area-of-a-a-tag-button/20327676#20327676
.left > ul > li a {
  // line-height: 1.8;
  display: inline-block;
  position: relative;
  z-index: 1;
  padding: 13px;
  margin: -13px;
}

.left > ul li {
  margin-bottom: 30px;
  // height: 48px;
}

.btn-group span {
  padding: 5px;
}

.react-icons {
  vertical-align: middle;
  width: 28px !important;
  height: 28px !important;
}

.active {
  color: darkred;
}
*/

export const TheSidebar = () => (
  <StyledSidebar className='left'>
    <p>sidebar test</p>
  </StyledSidebar>
);
