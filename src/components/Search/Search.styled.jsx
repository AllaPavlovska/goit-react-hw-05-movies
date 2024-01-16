import { styled } from 'styled-components';


export const Searchbar = styled.div`
  top: 0;
  left: 0;
  position: sticky;
  display: flex;
  align-items: center;
  margin-bottom: 24px;
 min-height: ${({ theme }) => theme.spacing(10)};
padding-right: ${({ theme }) => theme.spacing(6)};
padding-left: ${({ theme }) => theme.spacing(6)};
padding-top: ${({ theme }) => theme.spacing(3)};
padding-bottom: ${({ theme }) => theme.spacing(3)};
  color: #fff;
  background-color: aliceblue;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  overflow: hidden;
`;

export const SearchFormButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 1;
  }
`;

export const SearchFormButtonIcon = styled.svg`
  width: 24px;
  height: 24px;
  color: #0c154d;
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  margin-right: 8px;
  width: 100%;
  height: 24px;
  font: inherit;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  &::placeholder {
    font: inherit;
  }
`;