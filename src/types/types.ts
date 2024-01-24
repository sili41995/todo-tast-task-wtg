import { SetURLSearchParams } from 'react-router-dom';

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

export interface IFetchTodoProps {
  id: string;
  signal: AbortSignal;
}

export interface IUpdateTodoProps {
  data: ITodo;
  id: string;
}

export interface INavLink {
  href: string;
  title: string;
}

export type NavLinks = Readonly<INavLink[]>;

export interface IUpdateSearchParamsProps {
  key: string;
  value: string;
}

export interface IUseSetSearchParams {
  updateSearchParams: ({ key, value }: IUpdateSearchParamsProps) => void;
  searchParams: URLSearchParams;
  setSearchParams: SetURLSearchParams;
}

export interface IGetVisibleTodosProps {
  todos: ITodo[] | null;
  quantity: number;
  currentPage: number;
}

export interface IGetPaginationBarSettings {
  pageNumbers: number[];
  currentPage: number;
  step: number;
}
