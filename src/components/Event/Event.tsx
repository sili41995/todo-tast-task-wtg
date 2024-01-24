import { FC } from 'react';
import { IProps } from './Event.types';
import { Text } from './Event.styled';

const Event: FC<IProps> = ({ event }) => <Text>{event}</Text>;

export default Event;
