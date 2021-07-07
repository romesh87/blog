import { MongoClient } from 'mongodb';
import { NextApiHandler } from 'next';
import { hashPassword } from '../../../lib/auth';
import { connectToDatabase } from '../../../lib/db';

const handler: NextApiHandler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body;
    const { email, password } = data;

    if (
      !email
      || !email.includes('@')
      || !password
      || password.trim().length < 7
    ) {
      res.status(422).json({ message: 'Invalid email or password!' });
      return;
    }

    let client: MongoClient;
    try {
      client = await connectToDatabase();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Unable to establish connection to DB!', error);
      res.status(500).json('Could not connect to database');
      return;
    }

    const db = client.db();

    const existingUser = await db.collection('users').findOne({ email });
    if (existingUser) {
      res.status(422).json({ message: 'This email is not available, please specify another one!' });

      client.close();
      return;
    }

    const hashedPassword = await hashPassword(password);

    try {
      await db.collection('users').insertOne({ email, password: hashedPassword });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Unable to create new user!', error);
      res.status(500).json('Unable to create new user!');

      client.close();
      return;
    }

    res.status(201).json({ message: 'User created!' });

    client.close();
  }
};

export default handler;
