import { FC, Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Loader from 'components/Loader';
import NavigationBar from 'components/NavigationBar';
import { navLinks } from 'constants/index';
import { getIsTodosPage } from 'utils';
import { Container, Header, Main, Section } from './SharedLayout.styled';

const SharedLayout: FC = () => {
  const { pathname } = useLocation();
  const isTodosPage = getIsTodosPage(pathname);

  return (
    <>
      <Header>
        <Container>
          <NavigationBar navLinks={navLinks} />
        </Container>
      </Header>
      <Main>
        <Section>
          <Container isTodosPage={isTodosPage}>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </Container>
        </Section>
      </Main>
    </>
  );
};
export default SharedLayout;
