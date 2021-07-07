// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from 'react';
import FeedbackItem from './FeedbackItem';

import styles from './FeedbackList.module.css';

const FeedbackList: React.FC = () => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('api/messages')
      .then((response) => response.json())
      .then((data) => {
        setList(data.results);
        setIsLoading(false);
      });
  }, []);

  let content;

  if (isLoading) {
    content = <div style={{ textAlign: 'center' }}>Loading...</div>;
  } else if (!isLoading && list?.length === 0) {
    content = <div style={{ textAlign: 'center' }}>No messages yet</div>;
  } else {
    content = list.map((item) => <FeedbackItem key={item.datetime} item={item} />);
  }

  return (
    <div className={styles.container}>
      <h2>User Feedback</h2>
      {content}
    </div>
  );
};

export default FeedbackList;
