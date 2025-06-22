import express from 'express';
import { ModManager } from './ModManager.js';
import { ModEntry } from './readMods.js';

const app = express();
const manager = new ModManager();

app.use(express.json());

app.get('/api/mods', (_req, res) => {
  res.json(manager.list());
});

app.get('/api/mods/:id', (req, res) => {
  const mod = manager.get(req.params.id);
  if (!mod) return res.status(404).send('Not found');
  res.json(mod);
});

app.post('/api/mods', (req, res) => {
  try {
    manager.add(req.body as ModEntry);
    res.status(201).send('ok');
  } catch (err: any) {
    res.status(400).send(err.message);
  }
});

app.put('/api/mods/:id', (req, res) => {
  try {
    manager.update(req.params.id, req.body);
    res.status(200).send('ok');
  } catch (err: any) {
    res.status(400).send(err.message);
  }
});

app.delete('/api/mods/:id', (req, res) => {
  try {
    manager.delete(req.params.id);
    res.status(200).send('ok');
  } catch (err: any) {
    res.status(400).send(err.message);
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`API server listening on ${PORT}`);
});
