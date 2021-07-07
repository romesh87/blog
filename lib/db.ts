/* eslint-disable import/prefer-default-export */
import { MongoClient } from 'mongodb';

export const connectToDatabase = async (): Promise<MongoClient> => {
  const client = await MongoClient.connect(`mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.oazcq.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`);

  return client;
};
