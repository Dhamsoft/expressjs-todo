import express from 'express';
import todos from './routes/todos.js'

export default () => {
  const app = express.Router();
  todos(app);

  app.get('/', (req, res) => res.json({ body: 'Hello World!' }))

	return app
}
