import { useState } from 'react';
import Layout from '../Layout';
import { uploadPage } from '../api';

export default function Upload() {
  const [id, setId] = useState('');
  const [output, setOutput] = useState('');

  const run = async () => {
    const text = await uploadPage(id);
    setOutput(text);
  };

  return (
    <Layout title="Upload">
      <div className="space-y-2">
        <input className="input" value={id} onChange={(e) => setId(e.target.value)} placeholder="Mod id" />
        <button className="btn btn-primary" onClick={run} disabled={!id}>
          Upload Page
        </button>
        {output && <pre className="whitespace-pre-wrap bg-base-200 p-2 rounded">{output}</pre>}
      </div>
    </Layout>
  );
}
