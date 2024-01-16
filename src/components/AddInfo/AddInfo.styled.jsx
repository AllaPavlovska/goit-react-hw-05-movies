import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const AddInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  padding: 20px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const AddInfoTitle = styled.h3``;

export const AddInfoList = styled.ul`
  display: flex;
  gap: 20px;
`;

export const AddInfoItem = styled.li`
  display: inline-block;
  width: 80px;
  border: 1px solid gray;
  border-radius: 8px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  text-align: center;
`;

export const AddInfoLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 20px;
`;