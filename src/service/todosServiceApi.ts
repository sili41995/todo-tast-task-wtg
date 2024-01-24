import { Messages } from 'constants/index';
import { IFetchTodoProps, ITodo, IUpdateTodoProps } from 'types/types';

class TodosServiceApi {
  private BASE_URL = 'https://65b0f4a5d16d31d11bdda9d4.mockapi.io/todos';

  fetchTodos(signal: AbortSignal): Promise<ITodo[]> {
    const options = {
      signal,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    };

    return fetch(`${this.BASE_URL}`, options).then((response) => {
      if (!response.ok) {
        throw Error(Messages.fetchTodosError);
      }

      return response.json();
    });
  }

  fetchTodoById({ signal, id }: IFetchTodoProps): Promise<ITodo> {
    const options = {
      signal,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    };

    return fetch(`${this.BASE_URL}/${id}`, options).then((response) => {
      if (!response.ok) {
        throw Error(Messages.fetchTodoByIdError);
      }

      return response.json();
    });
  }

  deleteTodoById(id: string): Promise<ITodo> {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    };

    return fetch(`${this.BASE_URL}/${id}`, options).then((response) => {
      if (!response.ok) {
        throw Error(Messages.deleteTodoError);
      }

      return response.json();
    });
  }

  updateTodoById({ data, id }: IUpdateTodoProps): Promise<ITodo> {
    const options = {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    };

    return fetch(`${this.BASE_URL}/${id}`, options).then((response) => {
      if (!response.ok) {
        throw Error(Messages.updateTodoError);
      }

      return response.json();
    });
  }
}

const todosServiceApi = new TodosServiceApi();

export default todosServiceApi;
