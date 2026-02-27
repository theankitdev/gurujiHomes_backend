import mongoose from 'mongoose';
import 'dotenv/config'

const DB_NAME = 'gurujiHomes'; 

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: DB_NAME, 
    });
    console.log('✅ MongoDB Connected');
  } catch (error) {
    console.error('❌ MongoDB Connection Error:', error.message);
    process.exit(1); 
  }
};

export { connectDB };
