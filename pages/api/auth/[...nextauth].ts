import { MongoClient } from 'mongodb';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { verifyPassword } from '../../../lib/auth';
import { connectToDatabase } from '../../../lib/db';

export default NextAuth({
  session: { 
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials: Record<string, string>) {
        let client: MongoClient;
        try {
          client = await connectToDatabase();
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error('Unable to establish connection to DB!', error);
          throw new Error('Unable to establish connection to DB!')
        }
        
        const user = await client.db().collection('users').findOne({ email: credentials.email });
        if (!user) {
          throw new Error('Invalid email or password!');
        }

        const isValid = await verifyPassword(credentials.password, user.password);
        if (!isValid) {
          throw new Error('Invalid email or password!');
        }

        client.close();
        
        return { email: user.email }
      }
    })
  ]
});