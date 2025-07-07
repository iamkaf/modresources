import express from 'express';
import cors from 'cors';
import { ModManager } from './packages/frontend/src/ModManager';
import {
  generatePagesV2,
  generateIcons,
  uploadPage as uploadPageService,
  listImages,
  validateMods as validateModsService,
  generateOtherMods,
  fetchChangelog,
  listTemplates,
  readTemplate,
} from './packages/frontend/src/services';
import multer from 'multer';
import os from 'os';
import fs from 'fs';
import { convertMovToGif } from './packages/frontend/src/services/convert';

const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json());
const upload = multer({ dest: os.tmpdir() });

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
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

app.put('/api/mods/:id', (req, res) => {
  try {
    manager.update(req.params.id, req.body);
    res.sendStatus(200);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

app.delete('/api/mods/:id', (req, res) => {
  try {
    manager.delete(req.params.id);
    res.sendStatus(204);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/api/images', (req, res) => {
  try {
    const mod = req.query.mod as string | undefined;
    const data = listImages(mod);
    res.json(data);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/templates', (_req, res) => {
  res.json(listTemplates());
});

app.get('/api/templates/:name', (req, res) => {
  try {
    const text = readTemplate(req.params.name);
    res.type('text').send(text);
  } catch (err: any) {
    res.status(404).json({ error: err.message });
  }
});

app.post('/api/pagesv2', (_req, res) => {
  try {
    generatePagesV2();
    res.json({ ok: true });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/icon', async (_req, res) => {
  try {
    await generateIcons();
    res.json({ ok: true });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/upload', async (req, res) => {
  const id = req.body.id as string;
  if (!id) return res.status(400).json({ error: 'id is required' });
  try {
    await uploadPageService(id);
    res.json({ ok: true });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/validate', (_req, res) => {
  try {
    const out = validateModsService();
    res.type('text').send(out);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/othermods', (_req, res) => {
  try {
    generateOtherMods();
    res.json({ ok: true });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/changelog/:loader', async (req, res) => {
  const loader = req.params.loader as 'fabric' | 'neoforge' | 'forge';
  try {
    const text = await fetchChangelog(loader);
    res.type('text').send(text);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/convert', upload.single('file'), async (req, res) => {
  const file = req.file;
  if (!file) return res.status(400).json({ error: 'file is required' });
  const fps = parseInt(req.body.fps) || 30;
  const width = parseInt(req.body.width) || 640;
  try {
    const data = await convertMovToGif(file.path, { fps, width });
    res.setHeader('Content-Type', 'image/gif');
    res.setHeader('Content-Disposition', 'attachment; filename="output.gif"');
    res.end(data);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  } finally {
    fs.unlink(file.path, () => {});
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`API server running on ${port}`));
