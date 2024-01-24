import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { AiOutlineDelete } from 'react-icons/ai';
import { selectIsLoading } from '../../redux/todos/selectors';
import { useAppSelector } from 'hooks/redux';
import EditForm from 'components/EditForm';
import DefaultMessage from 'components/DefaultMessage';
import IconButton from 'components/IconButton';
import {
  AriaLabels,
  IconBtnType,
  Messages,
  IconSizes,
  PagePaths,
} from 'constants/index';
import { useDeleteTodo, useTargetTodo } from 'hooks';
import { Container } from './TodoDetails.styled';

const TodoDetails: FC = () => {
  const targetTodo = useTargetTodo();
  const isLoading = useAppSelector(selectIsLoading);
  const deleteTodo = useDeleteTodo();
  const id = useParams()[PagePaths.dynamicParam];

  const onDelBtnClick = () => {
    deleteTodo(id as string);
  };

  return targetTodo ? (
    <Container>
      <IconButton
        disabled={isLoading}
        btnType={IconBtnType.delete}
        onBtnClick={onDelBtnClick}
        icon={<AiOutlineDelete size={IconSizes.primaryIconSize} />}
        aria-label={AriaLabels.delete}
      />
      <EditForm />
    </Container>
  ) : (
    <DefaultMessage message={Messages.todoIdError} />
  );
};

export default TodoDetails;
