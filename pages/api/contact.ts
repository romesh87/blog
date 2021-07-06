import { NextApiHandler } from 'next';

import { connectToDatabase } from '../../lib/db';

const handler: NextApiHandler = async (req, res) => {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (
      !email
      || !email.includes('@')
      || !name
      || name.trim() === ''
      || !message
      || message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input' });
      return;
    }

    // Store in the database
    const newMessage: { email: string; name: string, message: string, id?: string } = {
      email,
      name,
      message,
    };

    let client;
    try {
      client = await connectToDatabase();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Unable to establish connection to DB!', error);
      res.status(500).json('Could not connect to database');
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection('messages').insertOne(newMessage);
      newMessage.id = result.insertedId;
      client.close();
    } catch (error) {
      client.close();
      // eslint-disable-next-line no-console
      console.error('Unable to store message in the DB!', error);
      res.status(500).json('Storing message failed');
      return;
    }

    res.status(201).json({ message: 'Message successfully stored!', storedMessage: newMessage });
  }
};

export default handler;
