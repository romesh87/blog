import { NextApiHandler } from 'next';
import { getSession } from 'next-auth/client';

import { connectToDatabase } from '../../lib/db';

const handler: NextApiHandler = async (req, res) => {
  if (req.method === 'GET') {
    const session = await getSession({ req });
    if (!session) {
      res.status(401).json({ message: 'Not authorized' });
      return;
    }

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

    const options = {
      sort: { datetime: -1 },
      projection: {
        _id: 0,
        name: 1,
        email: 1,
        datetime: 1,
        message: 1,
      },
    };

    const results = [];

    try {
      const cursor = await db.collection('messages').find({}, options);
      await cursor.forEach((message) => {
        results.push(message);
      });
      client.close();
    } catch (error) {
      client.close();
      // eslint-disable-next-line no-console
      console.error('Unable to get messages from the DB!', error);
      res.status(500).json('Unable to get messages from DB');
      return;
    }

    res.status(200).json({ results });
  }
};

export default handler;
