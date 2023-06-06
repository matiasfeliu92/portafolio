import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
  try {
    const dbUri: string | undefined = process.env.DB_URL;

    if (!dbUri) {
        throw new Error('DB_URL environment variable is not set.');
      }
    await mongoose.connect(dbUri);

    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
  }
};

export default connectDB;
