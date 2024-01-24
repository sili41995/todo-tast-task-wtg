import { FC } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { selectIsLoading } from '../../redux/todos/selectors';
import { useAppSelector } from 'hooks/redux';
import { IProps } from './TodosListItem.types';
import {
  AriaLabels,
  IconBtnType,
  IconSizes,
  PagePaths,
  Positions,
} from 'constants/index';
import LinkWithQuery from 'components/LinkWithQuery';
import IconButton from 'components/IconButton';
import { useDeleteTodo } from 'hooks';
import { Item, Title } from './TodosListItem.styled';

const TodosListItem: FC<IProps> = ({ todo }) => {
  const { id, task, completed } = todo;
  const isLoading = useAppSelector(selectIsLoading);
  const todoPath = `${PagePaths.todosPath}/${id}`;
  const deleteTodo = useDeleteTodo();

  const handleDelBtnClick = () => {
    deleteTodo(id);
  };

  return (
    <Item>
      <LinkWithQuery to={todoPath}>
        <Title completed={completed}>{task}</Title>
      </LinkWithQuery>
      <IconButton
        position={Positions.absolute}
        disabled={isLoading}
        btnType={IconBtnType.deleteTransparent}
        onBtnClick={handleDelBtnClick}
        aria-label={AriaLabels.delete}
        icon={<AiOutlineDelete size={IconSizes.primaryIconSize} />}
      />
    </Item>
  );
};

export default TodosListItem;
