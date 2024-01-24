import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { fetchTodos } from '../redux/todos/operations';
import { selectTodos } from '../redux/todos/selectors';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { Messages } from 'constants/index';
import { toasts } from 'utils';
import Loader from 'components/Loader';
import TodosContainer from 'components/TodosContainer';

const TodosPage = () => {
  const todos = useAppSelector(selectTodos);
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
    todos && (
      <>
        <TodosContainer quantity={6} />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </>
    )
  );
};

export default TodosPage;
