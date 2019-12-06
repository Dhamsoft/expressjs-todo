import express from 'express';
const route = express.Router();

export default (app) => {
  app.use("/todos", route);

  route.get('', (req, res) => {
    return res.json(
      {
        "todos": [{"id": 1, "title": "dd", "completed": false}]
      }
    ).status(200);
  });

  route.get('/:id', (req, res) => {
    return res.json(
      {
        "id": req.params.id,
        "title": "dd",
        "completed": false
      }
    ).status(200);
  });

  route.post('', (req, res) => {
    return res.json(
      {
        "id": Math.ceil(Math.random() * 10),
        "title": req.body.title,
        "completed": false
      }
    ).status(200);
  });

  route.put('/:id', (req, res) => {
    return res.json(
      {
        "id": req.params.id,
        "title": req.body.title,
        "completed": req.body.completed
      }
    ).status(200);
  });
}
