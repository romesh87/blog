// eslint-disable-next-line no-use-before-define
import React from 'react';

import { IFeedbackItem } from '../../interfaces';

import styles from './FeedbackItem.module.css';

export interface Props {
  item: IFeedbackItem;
}

const FeedbackItem: React.FC<Props> = (props) => (
  <div className={styles.container}>
    <div className={styles.header}>
      <div>
        <div className={styles.name}>{props.item.name}</div>
        <div className={styles.email}>{props.item.email}</div>
      </div>
      <div className={styles.datetime}>{props.item.datetime}</div>
    </div>
    <div className={styles.body}>
      <div className={styles.message}>{props.item.message}</div>
    </div>
  </div>
);

export default FeedbackItem;
