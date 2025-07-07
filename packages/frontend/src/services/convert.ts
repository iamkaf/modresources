import { execFile } from 'child_process';
import fs from 'fs/promises';
import path from 'path';
import os from 'os';
import { promisify } from 'util';

const exec = promisify(execFile);

export interface ConvertOptions {
  fps: number;
  width: number;
}

async function ensureFfmpeg() {
  try {
    await exec('ffmpeg', ['-version']);
  } catch {
    throw new Error('ffmpeg is not installed');
  }
}

export async function convertMovToGif(
  inputPath: string,
  opts: ConvertOptions,
): Promise<Buffer> {
  await ensureFfmpeg();
  const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), 'mov2gif-'));
  const palette = path.join(tmpDir, 'palette.png');
  const output = path.join(tmpDir, 'out.gif');
  const { fps, width } = opts;
  try {
    await exec('ffmpeg', [
      '-i',
      inputPath,
      '-vf',
      `fps=${fps},scale=${width}:-1:flags=lanczos,palettegen`,
      palette,
    ]);
    await exec('ffmpeg', [
      '-i',
      inputPath,
      '-i',
      palette,
      '-filter_complex',
      `fps=${fps},scale=${width}:-1:flags=lanczos[x];[x][1:v]paletteuse`,
      output,
    ]);
    const data = await fs.readFile(output);
    return data;
  } finally {
    await fs.rm(tmpDir, { recursive: true, force: true });
  }
}
