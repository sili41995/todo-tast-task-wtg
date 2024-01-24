import { createAsyncThunk } from '@reduxjs/toolkit';
import todosServiceApi from 'service/todosServiceApi';
import { ITodo, IUpdateTodoProps } from 'types/types';

export const fetchTodos = createAsyncThunk<
  ITodo[],
  undefined,
  { rejectValue: string }
>(
  'todos/fetchAll',
  async (
    _,
    {
      rejectWithValue,
      signal,
    }: { rejectWithValue: Function; signal: AbortSignal }
  ) => {
    try {
      const response = await todosServiceApi.fetchTodos(signal);

      return response;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const deleteTodo = createAsyncThunk<
  ITodo,
  string,
  { rejectValue: string }
>(
  'todos/deleteTodo',
  async (id: string, { rejectWithValue }: { rejectWithValue: Function }) => {
    try {
      const response = await todosServiceApi.deleteTodoById(id);
      return response;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const updateTodo = createAsyncThunk<
  ITodo,
  IUpdateTodoProps,
  { rejectValue: string }
>(
  'todos/updateTodo',
  async (data, { rejectWithValue }: { rejectWithValue: Function }) => {
    try {
      const response = await todosServiceApi.updateTodoById(data);
      return response;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);
