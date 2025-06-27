import { useState } from 'react';
import Layout from '../Layout';
import { generatePagesV2 } from '../api';

export default function Pagesv2() {
  const [message, setMessage] = useState<string | null>(null);

  const run = async () => {
    try {
      await generatePagesV2();
      setMessage('Pages generated!');
    } catch {
      setMessage('Failed to generate pages');
    }
  };

  return (
    <Layout title="Pagesv2">
      <button className="btn btn-primary" onClick={run}>
        Generate Pages
      </button>
      {message && <p>{message}</p>}
    </Layout>
  );
}
