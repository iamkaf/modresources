import { useState } from 'react';
import Layout from '../Layout';
import { fetchChangelogApi } from '../api';

export default function Changelog() {
  const [loader, setLoader] = useState<'fabric' | 'neoforge' | 'forge'>('fabric');
  const [output, setOutput] = useState('');

  const run = async () => {
    const text = await fetchChangelogApi(loader);
    setOutput(text);
  };

  return (
    <Layout title="Changelog">
      <div className="space-y-2">
        <select className="select select-bordered" value={loader} onChange={(e) => setLoader(e.target.value as any)}>
          <option value="fabric">Fabric</option>
          <option value="neoforge">NeoForge</option>
          <option value="forge">Forge</option>
        </select>
        <button className="btn btn-primary" onClick={run}>
          Fetch Changelog
        </button>
      </div>
      {output && <pre className="whitespace-pre-wrap bg-base-200 p-2 rounded mt-2 overflow-x-auto">{output}</pre>}
    </Layout>
  );
}
