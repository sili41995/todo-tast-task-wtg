import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import initialState from '../initialState';
import { ITodosState } from 'types/types';
import { deleteTodo, fetchTodos } from './operations';

const todosSlice = createSlice({
  name: 'todos',
  initialState: initialState.todos as ITodosState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
        error: initialState.todos.error,
        items: payload,
      }))
      .addCase(deleteTodo.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
        items: state.items && state.items.filter(({ id }) => id !== payload.id),
      }))
      .addMatcher(isAnyOf(fetchTodos.pending), (state) => ({
        ...state,
        isLoading: true,
      }))
      .addMatcher(isAnyOf(fetchTodos.rejected), (state, { payload }) => ({
        ...state,
        isLoading: false,
        error: payload as string,
      }));
  },
});

export default todosSlice.reducer;
