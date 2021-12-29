import mongoose from 'mongoose';

const connect = async (): Promise<void> => {
   const DB_URL = process.env.DB_URL as string;
   try {
      await mongoose.connect(DB_URL);
      console.log('DB connected');
   } catch (e) {
      console.log('db error', e);
   }
};

export default connect;
