import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const databaseConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log('[MongoDB] Connected to the C.H.O.A.M. database!');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

export default databaseConnect;
