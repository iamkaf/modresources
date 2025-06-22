import { useEffect, useState } from 'react';
import './App.css';
import ModForm from './ModForm';
import type { ModEntry } from './modTypes';
import { listMods, addMod } from './api';

export default function App() {
  const [mods, setMods] = useState<ModEntry[]>([]);

  useEffect(() => {
    listMods().then(setMods);
  }, []);

  return (
    <div className="container">
      <h1>Mods</h1>
      <ul>
        {mods.map((m) => (
          <li key={m.id}>{m.name}</li>
        ))}
      </ul>
      <h2>Add Mod</h2>
      <ModForm
        onSubmit={async (mod) => {
          await addMod(mod);
          setMods(await listMods());
        }}
      />
    </div>
  );
}

