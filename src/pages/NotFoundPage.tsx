import { FC, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { Messages, PagePaths } from 'constants/index';
import { toasts } from 'utils';

const NotFoundPage: FC = () => {
  useEffect(() => {
    toasts.errorToast(Messages.notFound);
  });

  return <Navigate to={PagePaths.homePath} />;
};

export default NotFoundPage;
