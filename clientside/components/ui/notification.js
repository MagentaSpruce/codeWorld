import { useContext } from 'react';
import ReactDOM from 'react-dom';

import classes from './notification.module.css';
import NotificationContext from '../../store/notification-context';

function Notification(props) {
  const notificationCtx = useContext(NotificationContext);

  const { title, message, status } = props;

  let statusClasses = '';

  if (status === 'success') {
    statusClasses = classes.success;
  }

  if (status === 'error') {
    statusClasses = classes.error;
  }

  if (status === 'pending') {
    statusClasses = classes.pending;
  }

  const activeClasses = `${classes.notification} ${statusClasses}`;

  return ReactDOM.createPortal(
    <div className={activeClasses} onClick={notificationCtx.hideNotification}>
      <h2>{title}</h2>
      <p
        className={`${
          status === 'error' ? 'text-red-600 pt-3' : 'text-white pt-3'
        }`}
      >
        {message}
      </p>
    </div>,
    document.getElementById('notifications')
  );
}

export default Notification;
