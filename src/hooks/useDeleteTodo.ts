import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toasts } from 'utils';
import { deleteTodo } from '../redux/todos/operations';
import { useAppDispatch } from 'hooks/redux';
import { Messages, PagePaths } from 'constants/index';

const useDeleteTodo = () => {
  const [todoId, setTodoId] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { search, pathname } = useLocation();
  const redirectPath = `${PagePaths.todosPath + search}`;

  useEffect(() => {
    if (todoId) {
      dispatch(deleteTodo(todoId))
        .unwrap()
        .then(() => {
          if (pathname.includes(todoId)) {
            navigate(redirectPath);
          }
          toasts.successToast(Messages.deleteTodoSuccessfully);
        })
        .catch((error) => {
          toasts.errorToast(error.message);
        });
    }
  }, [dispatch, navigate, pathname, redirectPath, todoId]);

  return setTodoId;
};

export default useDeleteTodo;
