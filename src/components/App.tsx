import { FC, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import GlobalStyles from 'components/GlobalStyles';
import Toast from 'components/Toast';
import { PagePaths } from 'constants/index';
import SharedLayout from 'components/SharedLayout';

const NotFoundPage = lazy(() => import('pages/NotFoundPage'));
const TodosPage = lazy(() => import('pages/TodosPage'));
const EventPlanningPage = lazy(() => import('pages/EventPlanningPage'));
const TodoDetails = lazy(() => import('components/TodoDetails'));
const AddTodoForm = lazy(() => import('components/AddTodoForm'));

const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path={PagePaths.homePath} element={<SharedLayout />}>
          <Route index element={<TodosPage />} />
          <Route path={PagePaths.todosPath} element={<TodosPage />}>
            <Route
              path={`${PagePaths.todosPath}/${PagePaths.newTodoPath}`}
              element={<AddTodoForm />}
            />
            <Route
              path={`${PagePaths.todosPath}/:${PagePaths.dynamicParam}`}
              element={<TodoDetails />}
            />
          </Route>
          <Route
            path={PagePaths.eventPlanning}
            element={<EventPlanningPage />}
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
