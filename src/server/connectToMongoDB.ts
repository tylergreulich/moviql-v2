import * as mongoose from 'mongoose';
import { keys } from '../config/keys';
import Movie from '../models/movie';

const startMongooseConnection = () => {
  mongoose.connect(
    process.env.MONGODB_URI || keys.TEST_DB,
    { useNewUrlParser: true }
  );
  mongoose.set('useCreateIndex', true);
  mongoose.set('useFindAndModify', false);
  mongoose.set('useNewUrlParser', true);
  const db = mongoose.connection;
  console.log('Connected to MongoDB');
};

export const connectToMongoDB = async () => {
  try {
    await startMongooseConnection();
  } catch (err) {
    console.log(err);
  }
};

export const startTestConnection = async () => {
  startMongooseConnection();
  await mongoose.connection.dropDatabase();
};

export const dropTestConnection = async () => {
  try {
    await mongoose.connection.close();
  } catch (err) {
    console.log(err);
  }
};
