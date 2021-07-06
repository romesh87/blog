import ReactDOM from 'react-dom';

import styles from './Notification.module.css';

export interface Props {
  title: string;
  message: string;
  status: 'success' | 'error' | 'pending';
}

function Notification(props: Props) {
  const { title, message, status } = props;

  let statusClasses = '';

  if (status === 'success') {
    statusClasses = styles.success;
  }

  if (status === 'error') {
    statusClasses = styles.error;
  }

  const cssClasses = `${styles.notification} ${statusClasses}`;

  return ReactDOM.createPortal(
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    document.getElementById('notifications'),
  );
}

export default Notification;
