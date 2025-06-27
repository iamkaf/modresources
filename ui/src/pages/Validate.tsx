import { useState } from 'react';
import Layout from '../Layout';
import { validateMods } from '../api';

export default function Validate() {
  const [output, setOutput] = useState('');

  const run = async () => {
    const text = await validateMods();
    setOutput(text);
  };

  return (
    <Layout title="Validate">
      <button className="btn btn-primary" onClick={run}>
        Validate Mods
      </button>
      {output && <pre className="whitespace-pre-wrap bg-base-200 p-2 rounded mt-2">{output}</pre>}
    </Layout>
  );
}
