import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, Header, Link } from "./SharedLayout.styled";

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
