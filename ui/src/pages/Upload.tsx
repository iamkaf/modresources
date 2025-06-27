import { useState } from 'react';
import Layout from '../Layout';
import { uploadPage } from '../api';

export default function Upload() {
  const [id, setId] = useState('');
  const [output, setOutput] = useState<string | null>(null);

  const run = async () => {
    try {
      await uploadPage(id);
      setOutput('Uploaded!');
    } catch {
      setOutput('Failed to upload');
    }
  };

  return (
    <Layout title="Upload">
      <div className="space-y-2">
        <input className="input" value={id} onChange={(e) => setId(e.target.value)} placeholder="Mod id" />
        <button className="btn btn-primary" onClick={run} disabled={!id}>
          Upload Page
        </button>
        {output && <p>{output}</p>}
      </div>
    </Layout>
  );
}
