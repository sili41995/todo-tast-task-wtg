import { FC } from 'react';
import { IProps } from './TodoModalForm.types';
import { Container } from './TodoModalForm.styled';

const TodoModalForm: FC<IProps> = ({ children }) => (
  <Container>{children}</Container>
);

export default TodoModalForm;
