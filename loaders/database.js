import pgp from 'pg-promise';
import config from '../config/index.js';

export default async () => {
  return pgp({})(config.database)
};
