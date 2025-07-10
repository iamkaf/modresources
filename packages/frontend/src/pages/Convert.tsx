import { useState } from 'react';
import Layout from '../Layout';
import { convertMovToGif } from '../api';

export default function Convert() {
  const [file, setFile] = useState<File | null>(null);
  const [fps, setFps] = useState(30);
  const [width, setWidth] = useState(640);
  const [error, setError] = useState<string | null>(null);

  const run = async () => {
    if (!file) return;
    try {
      const blob = await convertMovToGif(file, fps, width);
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = file.name.replace(/\.[^.]+$/, '.gif');
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      setError(null);
    } catch (err) {
      if (err instanceof Error) setError(err.message);
      else setError('Failed to convert');
    }
  };

  return (
    <Layout title="Convert">
      <div className="space-y-2">
        <input
          type="file"
          accept=".mov,video/quicktime"
          className="file-input"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />
        <div className="flex gap-2">
          <label className="form-control">
            <span className="label-text">FPS</span>
            <input
              type="number"
              className="input input-bordered"
              value={fps}
              onChange={(e) => setFps(Number(e.target.value))}
            />
          </label>
          <label className="form-control">
            <span className="label-text">Width</span>
            <input
              type="number"
              className="input input-bordered"
              value={width}
              onChange={(e) => setWidth(Number(e.target.value))}
            />
          </label>
        </div>
        <button className="btn btn-primary" disabled={!file} onClick={run}>
          Convert to GIF
        </button>
        {error && <p className="text-error">{error}</p>}
      </div>
    </Layout>
  );
}
