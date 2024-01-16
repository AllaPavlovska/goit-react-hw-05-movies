import { NavLink } from 'react-router-dom';
import {
  AddInfoContainer,
  AddInfoItem,
  AddInfoLink,
  AddInfoList,
  AddInfoTitle,
} from './AddInfo.styled';

export const AddInfo = () => {
  return (
    <AddInfoContainer>
      <AddInfoTitle>Additional information</AddInfoTitle>
      <AddInfoList>
        <AddInfoItem>
          <AddInfoLink to={`cast`}>Cast</AddInfoLink>
        </AddInfoItem>
        <AddInfoItem>
          <AddInfoLink to={`reviews`}>Reviews</AddInfoLink>
        </AddInfoItem>
      </AddInfoList>
    </AddInfoContainer>
  );
};