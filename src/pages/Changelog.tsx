import { useState } from 'react';
import Layout from '../Layout';
import { fetchChangelogApi } from '../api';

export default function Changelog() {
  const [loader, setLoader] = useState<'fabric' | 'neoforge' | 'forge'>('fabric');
  const [id, setId] = useState('');
  const [text, setText] = useState('');

  const run = async () => {
    try {
      const result = await fetchChangelogApi(id, loader);
      setText(result);
    } catch {
      setText('Failed to fetch changelog');
    }
  };

  return (
    <Layout title="Changelog">
      <div className="space-y-2">
        <select className="select" value={loader} onChange={(e) => setLoader(e.target.value as any)}>
          <option value="fabric">Fabric</option>
          <option value="neoforge">NeoForge</option>
          <option value="forge">Forge</option>
        </select>
        <input className="input" value={id} onChange={(e) => setId(e.target.value)} placeholder="Modrinth ID" />
        <button className="btn btn-primary" onClick={run} disabled={!id}>
          Fetch Changelog
        </button>
        {text && <pre className="whitespace-pre-wrap bg-base-200 p-2 rounded">{text}</pre>}
      </div>
    </Layout>
  );
}
