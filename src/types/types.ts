export interface ITodo {
  id: string;
  task: string;
  completed: boolean;
  deadline: Date;
}

export interface ITodosState {
  items: ITodo[] | null;
  isLoading: boolean;
  error: string | null;
}

export interface IState {
  todos: ITodosState;
}

export interface IUpdateTodoProps {
  data: ITodo;
  id: string;
}

export interface IFetchTodoProps {
  id: string;
  signal: AbortSignal;
}

export interface INavLink {
  href: string;
  title: string;
}

export type NavLinks = Readonly<INavLink[]>;
