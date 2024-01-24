import { IState } from 'types/types';

const initialState: IState = {
  todos: {
    items: null,
    isLoading: false,
    error: null,
  },
};

export default initialState;
