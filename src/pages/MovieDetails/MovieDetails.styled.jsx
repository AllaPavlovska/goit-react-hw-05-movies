import { styled } from 'styled-components';

export const Text = styled.p`
  font-size: 20px;
  font-weight: 700;
  text-align: left;
`;

export const Poster = styled.img`
  object-fit: cover;
  height: 250px;
  width: 180px;
  margin-right: 20px;
`;

export const MovieInfo = styled.div`
  display: flex;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const MovieTextContainer = styled.div``;