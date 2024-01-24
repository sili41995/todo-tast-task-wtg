import { IEvent, ITodo } from 'types/types';

const getEvents = (todos: ITodo[] | null): IEvent[] | null => {
  if (!todos) {
    return todos;
  }

  return todos.map(({ deadline, task }) => ({ title: task, date: deadline }));
};

export default getEvents;
