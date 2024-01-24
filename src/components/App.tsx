import GlobalStyles from 'components/GlobalStyles';
import Toast from 'components/Toast';
import PagePaths from 'constants/pagePaths';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout';
import { FC, lazy } from 'react';

const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path={PagePaths.homePath} element={<SharedLayout />}>
          <Route index element={<div>TodosPage</div>} />
          <Route path={PagePaths.todosPath} element={<div>TodosPage</div>}>
            <Route
              path={`${PagePaths.todosPath}/:${PagePaths.dynamicParam}`}
              element={<div>TodoDetails</div>}
            />
          </Route>
          <Route
            path={PagePaths.eventPlanning}
            element={<div>EventPlanningPage</div>}
          />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
      <Toast />
      <GlobalStyles />
    </>
  );
};

export default App;
