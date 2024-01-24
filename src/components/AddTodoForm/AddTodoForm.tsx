import { useEffect, FC } from 'react';
import { GiCheckMark } from 'react-icons/gi';
import { useForm, SubmitHandler } from 'react-hook-form';
import { selectIsLoading } from '../../redux/todos/selectors';
import { addTodo } from '../../redux/todos/operations';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import IconButton from 'components/IconButton';
import Input from 'components/Input';
import TodoModalForm from 'components/TodoModalForm';
import GoBackLink from 'components/GoBackLink';
import { toasts } from 'utils';
import { ITodo } from 'types/types';
import {
  AriaLabels,
  BtnType,
  IconBtnType,
  IconSizes,
  InputTypes,
  Messages,
} from 'constants/index';
import { Buttons, Form, Title } from './AddTodoForm.styled';

const AddTodoForm: FC = () => {
  const isLoading = useAppSelector(selectIsLoading);
  const dispatch = useAppDispatch();
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm<ITodo>();

  useEffect(() => {
    errors.task && toasts.errorToast(Messages.taskIsReq);
  }, [errors, isSubmitting]);

  const handleFormSubmit: SubmitHandler<ITodo> = (data) => {
    const todo = { ...data, completed: false };

    dispatch(addTodo(todo))
      .unwrap()
      .then(() => {
        toasts.successToast(Messages.addTodoSuccessfully);
        reset();
      })
      .catch((error) => {
        toasts.errorToast(error.message);
      });
  };

  return (
    <TodoModalForm>
      <Title>Add todo</Title>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <Input
          settings={{ ...register('task', { required: true }) }}
          type={InputTypes.text}
          placeholder='Task'
          autoFocus={true}
        />
        <Buttons>
          <IconButton
            disabled={isLoading}
            btnType={IconBtnType.accept}
            type={BtnType.submit}
            aria-label={AriaLabels.accept}
            icon={<GiCheckMark size={IconSizes.primaryIconSize} />}
          />
          <GoBackLink />
        </Buttons>
      </Form>
    </TodoModalForm>
  );
};

export default AddTodoForm;
