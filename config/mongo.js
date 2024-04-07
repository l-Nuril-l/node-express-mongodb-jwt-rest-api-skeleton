import mongoose from 'mongoose';
import loadModels from '../models/index.js';
const DB_URL = process.env.MONGO_URI

export default () => {
  const connect = () => {
    mongoose.connect(DB_URL).catch((err) => {
      const dbStatus = err ?
        `*    Error connecting to DB: ${err}\n****************************\n` :
        `*    DB Connection: OK\n****************************\n`;
      if (process.env.NODE_ENV !== 'test') {
        // Prints initialization
        console.log('****************************');
        console.log('*    Starting Server');
        console.log(`*    Port: ${process.env.PORT || 3001}`);
        console.log(`*    NODE_ENV: ${process.env.NODE_ENV}`);
        console.log(`*    Database: MongoDB`);
        console.log(dbStatus);
      }
    })
  };
  connect()

  mongoose.connection.on('connected', () => console.log("DB: OK!"))
  mongoose.connection.on('error', console.log)
  mongoose.connection.on('disconnected', connect)

  loadModels()
};
