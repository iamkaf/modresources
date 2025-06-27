import { useEffect, useState } from 'react';
import Layout from '../Layout';
import { listImagesApi } from '../api';

export default function Images() {
  const [images, setImages] = useState<Record<string, string[]>>({});

  useEffect(() => {
    listImagesApi().then(setImages);
  }, []);

  return (
    <Layout title="Images">
      <div className="space-y-4">
        {Object.entries(images).map(([mod, urls]) => (
          <div key={mod}>
            <h2 className="font-bold capitalize">{mod}</h2>
            <ul className="list-disc ml-4">
              {urls.map((u) => (
                <li key={u}>
                  <a href={u} className="link" target="_blank" rel="noreferrer">
                    {u}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Layout>
  );
}
