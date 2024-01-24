const enum Messages {
  emptyList = 'Todos list is empty',
  emptyEventsList = 'Events list is empty',
  loadedSuccess = 'Todos loaded successfully',
  fetchTodoByIdError = 'Fetch todo failed',
  fetchTodosError = 'Fetch todos failed',
  notFound = 'The request URL was not found',
  deleteTodoError = 'Delete todo failed',
  addTodoError = 'Added todo failed',
  updateTodoError = 'Update todo failed',
  deleteTodoSuccessfully = 'Todo successfully removed',
  updateTodoSuccessfully = 'Todo updated successfully',
  addTodoSuccessfully = 'Todo added successfully',
  taskIsReq = 'Task is required',
  todoIdError = 'Todo is absent',
}

export default Messages;
