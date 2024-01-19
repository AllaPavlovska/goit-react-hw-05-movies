import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderLink = styled(NavLink)`
   overflow: hidden;
  position: relative;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  width: 70px;
  height: 20px;
  padding: 16px;
  border: none;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);


  &.active {
   color: white;
    background-color: red;
  }
  &.active::before {
    content: '';
    position: absolute;
    left: 17%;
    top: 70%;
    width: 60px;
    height: 1px;
    border-radius: 1px;
    background-color: red;
    transition: transform 150ms 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    font-weight: 700;
  }

  &::before {
    content: '';
    position: absolute;
    left: 17%;
    top: 70%;
    width: 60px;
    height: 1px;
    border-radius: 1px;
    background-color: red;
    transform: scale(0);
    transition: transform 150ms 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;