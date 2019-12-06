import dbLoader from './database.js';
import expressLoader from './express.js';


export default async ({ expressApp }) => {
  const dbConnection = await dbLoader();

  expressLoader({ app: expressApp });
}
