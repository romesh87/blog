/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';

import Notification from '../UI/Notification/Notification';
import styles from './ContactForm.module.css';

const sendContactData = async (contactDetails: { email: string, name: string, message: string }): Promise<void> => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(contactDetails),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong');
  }
};

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [requestStatus, setRequestStatus] = useState(''); // pending | success | error
  const [requestError, setRequestError] = useState(null);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  const onSubmitHandler = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    setRequestStatus('pending');

    try {
      await sendContactData({ email, name, message });
      setRequestStatus('success');
      setEmail('');
      setName('');
      setMessage('');
    } catch (error) {
      setRequestStatus('error');
      setRequestError(error.message);
    }
  };

  let notification;

  if (requestStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending message...',
      message: 'Please wait while your message is being sent',
    };
  } else if (requestStatus === 'success') {
    notification = {
      status: 'success',
      title: 'Success!',
      message: 'Your message has been sent successfully',
    };
  } else if (requestStatus === 'error') {
    notification = {
      status: 'error',
      title: 'Error!',
      message: requestError,
    };
  }

  return (
    <section className={styles.contact}>
      <h1>How can I help you?</h1>
      <form className={styles.form} onSubmit={onSubmitHandler}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className={styles.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" required value={name} onChange={(e) => setName(e.target.value)} />
          </div>
        </div>
        <div className={styles.control}>
          <label htmlFor="message">Your Message</label>
          <textarea id="message" rows={5} value={message} onChange={(e) => setMessage(e.target.value)} />
        </div>

        <div className={styles.actions}>
          <button type="submit">Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
};

export default ContactForm;
