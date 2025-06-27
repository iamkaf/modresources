import { useEffect, useState } from 'react';
import Layout from '../Layout';
import { readPad } from '../api';

export default function Pad() {
  const [text, setText] = useState('');

  useEffect(() => {
    readPad().then(setText);
  }, []);

  return (
    <Layout title="Pad">
      <textarea className="textarea w-full h-60" value={text} readOnly />
    </Layout>
  );
}
