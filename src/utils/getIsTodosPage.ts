import { PagePaths } from 'constants/index';

const getIsTodosPage = (path: string): boolean =>
  path.includes(PagePaths.todosPath);

export default getIsTodosPage;
