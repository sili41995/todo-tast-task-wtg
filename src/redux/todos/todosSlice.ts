import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import initialState from '../initialState';
import { ITodosState } from 'types/types';
import { addTodo, deleteTodo, fetchTodos, updateTodo } from './operations';

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
      .addCase(updateTodo.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
        items: state.items && [
          ...state.items.filter(({ id }) => id !== payload.id),
          payload,
        ],
      }))
      .addCase(addTodo.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
        items: state.items && [...state.items, payload],
      }))
      .addMatcher(
        isAnyOf(
          fetchTodos.pending,
          deleteTodo.pending,
          updateTodo.pending,
          addTodo.pending
        ),
        (state) => ({
          ...state,
          isLoading: true,
        })
      )
      .addMatcher(
        isAnyOf(
          fetchTodos.rejected,
          deleteTodo.rejected,
          updateTodo.rejected,
          addTodo.rejected
        ),
        (state, { payload }) => ({
          ...state,
          isLoading: false,
          error: payload as string,
        })
      );
  },
});

export default todosSlice.reducer;
