import express from 'express';
import cors from 'cors';
import { ModManager } from '../src/ModManager';
import { exec } from 'child_process';
import path from 'path';
import fs from 'fs';

const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json());

const manager = new ModManager();

function runScript(script: string, args: string[] = []): Promise<string> {
  return new Promise((resolve, reject) => {
    const cmd = `npx tsx ${path.join('tools', script)}`;
    exec(`${cmd} ${args.join(' ')}`, { cwd: path.join(__dirname, '..') }, (err, stdout, stderr) => {
      if (err) return reject(stderr || err.message);
      resolve(stdout || '');
    });
  });
}

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

app.get('/api/images', async (req, res) => {
  try {
    const mod = req.query.mod as string | undefined;
    const out = await runScript('print-images.ts', mod ? [mod] : []);
    res.type('text').send(out);
  } catch (err: any) {
    res.status(500).json({ error: err });
  }
});

app.get('/api/pad', async (_req, res) => {
  try {
    const file = path.join(__dirname, '..', 'tools', 'scratchpad.md');
    const content = fs.readFileSync(file, 'utf-8');
    const sanitized = content
      .replace(/\\/g, '\\\\')
      .replace(/"/g, '\\"')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '');
    res.json({ text: sanitized });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/pagesv2', async (_req, res) => {
  try {
    await runScript('page-builder.v2.ts');
    res.json({ ok: true });
  } catch (err: any) {
    res.status(500).json({ error: err });
  }
});

app.post('/api/icon', async (_req, res) => {
  try {
    await runScript('icon-generator.ts');
    res.json({ ok: true });
  } catch (err: any) {
    res.status(500).json({ error: err });
  }
});

app.post('/api/upload', async (req, res) => {
  const id = req.body.id as string;
  if (!id) return res.status(400).json({ error: 'id is required' });
  try {
    const out = await runScript('page-uploader.ts', [id]);
    res.type('text').send(out);
  } catch (err: any) {
    res.status(500).json({ error: err });
  }
});

app.post('/api/validate', async (_req, res) => {
  try {
    const out = await runScript('validate-mods.ts');
    res.type('text').send(out);
  } catch (err: any) {
    res.status(500).json({ error: err });
  }
});

app.post('/api/othermods', async (_req, res) => {
  try {
    await runScript('other-mods.ts');
    res.json({ ok: true });
  } catch (err: any) {
    res.status(500).json({ error: err });
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`API server running on ${port}`));

