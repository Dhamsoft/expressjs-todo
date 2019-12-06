import express from 'express';
import config from './config/index.js';
import loader from './loaders/index.js';

async function startServer() {
  const app = express();

  /**
   * A little hack here
   * Import/Export can only be used in 'top-level code'
   * Well, at least in node 10 without babel and at the time of writing
   * So we are using good old require.
   **/
  await loader({ expressApp: app });

// app.get('/', (req, res) => res.json({ body: 'Hello World!' }))
  app.listen(config.port, () => console.log(`Example app listening on port ${config.port}!`))
}

startServer();
