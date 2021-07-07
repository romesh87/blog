// eslint-disable-next-line no-use-before-define
import React from 'react';
import ReactDOM from 'react-dom';

import styles from './Notification.module.css';

export interface Props {
  title: string;
  message: string;
  status: 'success' | 'error' | 'pending';
}

const Notification: React.FC<Props> = (props) => {
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
};

export default Notification;
