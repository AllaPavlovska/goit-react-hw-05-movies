import { Grid } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderContainer>
      <Grid
        visible={true}
        height="60"
        width="60"
        color="#4fa95d"
        ariaLabel="grid-loading"
        radius="10"
        wrapperStyle={{}}
        wrapperClass="grid-wrapper"
      />
    </LoaderContainer>
  );
};
