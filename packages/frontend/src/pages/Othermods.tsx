import { useState } from 'react';
import Layout from '../Layout';
import { generateOtherMods } from '../api';

export default function Othermods() {
  const [message, setMessage] = useState<string | null>(null);

  const run = async () => {
    try {
      await generateOtherMods();
      setMessage('Generated snippet!');
    } catch {
      setMessage('Failed to generate');
    }
  };

  return (
    <Layout title="Othermods">
      <button className="btn btn-primary" onClick={run}>
        Generate Promo Snippet
      </button>
      {message && <p>{message}</p>}
    </Layout>
  );
}
