import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'components/Container/Container.styled';
import { HeaderLink } from 'components/StyledLink/StyledLink.styled';
import { Loader } from 'components/Loader/Loader';

export const SharedLayout = () => {
  return (
    <Container>
      <HeaderLink to={'/'}>Home</HeaderLink>
      <HeaderLink to={'/movies'}>Movies</HeaderLink>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
