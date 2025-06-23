import express from 'express';
import cors from 'cors';
import { ModManager } from '../src/ModManager.js';

const app = express();
app.use(cors());
app.use(express.json());

const manager = new ModManager();

app.get('/api/mods', (_req, res) => {
  res.json(manager.list());
});

app.get('/api/mods/:id', (req, res) => {
  const mod = manager.get(req.params.id);
  if (!mod) return res.sendStatus(404);
  res.json(mod);
});

app.post('/api/mods', (req, res) => {
  try {
    manager.add(req.body);
    res.sendStatus(201);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    res.status(400).json({ error: message });
  }
});

app.put('/api/mods/:id', (req, res) => {
  try {
    manager.update(req.params.id, req.body);
    res.sendStatus(200);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    res.status(400).json({ error: message });
  }
});

app.delete('/api/mods/:id', (req, res) => {
  try {
    manager.delete(req.params.id);
    res.sendStatus(204);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    res.status(400).json({ error: message });
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`API server running on ${port}`));

