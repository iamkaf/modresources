import { useState } from 'react';
import Layout from '../Layout';
import { generateIcons } from '../api';

export default function Icon() {
  const [message, setMessage] = useState<string | null>(null);

  const run = async () => {
    try {
      await generateIcons();
      setMessage('Icons generated!');
    } catch {
      setMessage('Failed to generate icons');
    }
  };

  return (
    <Layout title="Icon">
      <button className="btn btn-primary" onClick={run}>
        Generate Icons
      </button>
      {message && <p>{message}</p>}
    </Layout>
  );
}
