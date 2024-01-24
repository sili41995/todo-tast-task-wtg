import { IState } from 'types/types';

export const selectTodos = (state: IState) => state.todos.items;

export const selectError = (state: IState) => state.todos.error;

export const selectIsLoading = (state: IState) => state.todos.isLoading;
