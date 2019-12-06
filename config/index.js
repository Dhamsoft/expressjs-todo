import dotenv from 'dotenv';

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (!envFound) {
  // This error should crash whole process

  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
  /**
   * Your favorite port
   */
  port: parseInt(process.env.APP_SERVER_PORT, 10),

 /**
   * That database config
   */
  database: {
    host: 'localhost',
    port: process.env.DB_SERVER_PORT,
    database: process.env.DB_DATABASE_NAME,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
  },


  /**
   * API configs
   */
  api: {
    prefix: '/api',
  }
};
