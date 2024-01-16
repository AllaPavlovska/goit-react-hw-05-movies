import { styled } from 'styled-components';

export const GenresList = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};
`;