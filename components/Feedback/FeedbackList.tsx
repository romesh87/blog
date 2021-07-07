// eslint-disable-next-line no-use-before-define
import React from 'react';
import FeedbackItem from './FeedbackItem';

import styles from './FeedbackList.module.css';

const FeedbackList: React.FC = () => {
  const datetime = new Date();

  const list = [{
    name: 'John',
    email: 'test@test.com',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque accumsan justo et odio tempor consectetur. Suspendisse interdum vulputate erat eu euismod. Nulla facilisi. Nunc id ante non libero vulputate euismod. Nunc sed dolor ipsum. Cras aliquet gravida ante quis dictum. Nunc tempus et purus ac suscipit.',
    datetime: datetime.toISOString(),
  }];

  return (
    <div className={styles.container}>
      <h2>User Feedback</h2>
      {list.map((item) => <FeedbackItem item={item} />)}
    </div>
  );
};

export default FeedbackList;
