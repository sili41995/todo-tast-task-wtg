import { FC, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { fetchTodos } from '../redux/todos/operations';
import { useAppDispatch } from 'hooks/redux';
import GlobalStyles from 'components/GlobalStyles';
import Toast from 'components/Toast';
import { Messages, PagePaths } from 'constants/index';
import SharedLayout from 'components/SharedLayout';
import { toasts } from 'utils';

const NotFoundPage = lazy(() => import('pages/NotFoundPage'));
const TodosPage = lazy(() => import('pages/TodosPage'));
const EventPlanningPage = lazy(() => import('pages/EventPlanningPage'));
const TodoDetails = lazy(() => import('components/TodoDetails'));
const AddTodoForm = lazy(() => import('components/AddTodoForm'));

const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const promise = dispatch(fetchTodos());
    promise
      .unwrap()
      .then(() => {
        toasts.successToast(Messages.loadedSuccess);
      })
      .catch((error) => {
        toasts.errorToast(error);
      });

    return () => {
      promise.abort();
    };
  }, [dispatch]);

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
