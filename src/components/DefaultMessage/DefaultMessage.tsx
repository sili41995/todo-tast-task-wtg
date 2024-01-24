import { FC } from 'react';
import { IProps } from './DefaultMessage.types';
import { Message } from './DefaultMessage.styled';

const EmptyListMessage: FC<IProps> = ({ message }) => (
  <Message>{message}</Message>
);

export default EmptyListMessage;
