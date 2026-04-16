const express = require('express');
const router = express.Router();

// In-memory store (replace with a real DB later)
let items = [
  { id: 1, name: 'Item One' },
  { id: 2, name: 'Item Two' },
];
let nextId = 3;

router.get('/', (req, res) => {
  res.json(items);
});

router.get('/:id', (req, res) => {
  const item = items.find((i) => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ error: 'Item not found' });
  res.json(item);
});

router.post('/', (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: 'name is required' });
  const item = { id: nextId++, name };
  items.push(item);
  res.status(201).json(item);
});

router.delete('/:id', (req, res) => {
  const index = items.findIndex((i) => i.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Item not found' });
  items.splice(index, 1);
  res.status(204).send();
});

module.exports = router;
