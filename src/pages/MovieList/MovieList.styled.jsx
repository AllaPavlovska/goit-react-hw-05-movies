import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const ButtonListMovie = styled(NavLink)`
  display: inline-block;
  width: 80px;
  border: 1px solid gray;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 20px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 280px));
  grid-gap: ${({ theme }) => theme.spacing(6)};
  justify-content: center;
`;