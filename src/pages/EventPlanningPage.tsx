import { FC, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { useAppSelector } from 'hooks/redux';
import { selectTodos } from '../redux/todos/selectors';
import { getEvents } from 'utils';
import DefaultMessage from 'components/DefaultMessage';
import { Messages } from 'constants/index';
import { EventClickArg } from '@fullcalendar/core';
import ModalWin from 'components/ModalWin';

const EventPlanningPage: FC = () => {
  const [showModalWin, setShowModalWin] = useState<boolean>(false);
  const [event, setEvent] = useState<string | null>(null);
  const todos = useAppSelector(selectTodos);
  const events = getEvents(todos);

  const onDateClick = (arg: EventClickArg) => {
    setShowModalWin(true);
    setEvent(arg.event.title);
  };

  const toggleShowModal = () => {
    setShowModalWin((prevState) => !prevState);
  };

  return events ? (
    <>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView='dayGridMonth'
        events={events}
        eventClick={onDateClick}
      />
      {showModalWin && (
        <ModalWin setModalWinState={toggleShowModal}>
          <p>{event}</p>
        </ModalWin>
      )}
    </>
  ) : (
    <DefaultMessage message={Messages.emptyEventsList} />
  );
};

export default EventPlanningPage;
