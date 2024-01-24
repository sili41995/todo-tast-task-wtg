import { useEffect, useState, FC } from 'react';
import { FaCheck } from 'react-icons/fa';
import { GiCheckMark } from 'react-icons/gi';
import { useParams } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { updateTodo } from '../../redux/todos/operations';
import { selectIsLoading } from '../../redux/todos/selectors';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import IconButton from 'components/IconButton';
import TodoModalForm from 'components/TodoModalForm';
import Input from 'components/Input';
import GoBackLink from 'components/GoBackLink';
import { toasts } from 'utils';
import { useTargetTodo } from 'hooks';
import { ITodo } from 'types/types';
import {
  IconSizes,
  AriaLabels,
  Messages,
  PagePaths,
  BtnType,
  IconBtnType,
  InputTypes,
} from 'constants/index';
import { Buttons, Form, Title, InputContainer } from './EditForm.styled';

const EditForm: FC = () => {
  const isLoading = useAppSelector(selectIsLoading);
  const dispatch = useAppDispatch();
  const id = useParams()[PagePaths.dynamicParam];
  const { task, completed } = useTargetTodo() as ITodo;
  const [checked, setChecked] = useState(completed);

  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm<ITodo>();

  useEffect(() => {
    errors.task && toasts.errorToast(Messages.taskIsReq);
  }, [errors, isSubmitting]);

  useEffect(() => {
    setChecked(completed);

    return () => {
      reset();
    };
  }, [reset, id, completed]);

  const handleFormSubmit: SubmitHandler<ITodo> = (data) => {
    if (!id) {
      return;
    }

    dispatch(updateTodo({ data, id }))
      .unwrap()
      .then(() => {
        toasts.successToast(Messages.updateTodoSuccessfully);
      })
      .catch((error) => {
        toasts.errorToast(error.message);
      });
  };

  const onCheckboxChange = () => {
    setChecked((prevState) => !prevState);
  };

  return (
    <TodoModalForm>
      <Title>Todo editing</Title>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <InputContainer>
          <Input
            settings={{ ...register('completed') }}
            checked={checked}
            type={InputTypes.checkbox}
            onChange={onCheckboxChange}
            altElem={<FaCheck size={IconSizes.primaryIconSize} />}
          />
          <Input
            defaultValue={task}
            settings={{ ...register('task', { required: true }) }}
            type={InputTypes.text}
            placeholder='Task'
          />
        </InputContainer>
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

export default EditForm;
