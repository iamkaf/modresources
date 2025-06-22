import { useEffect, useState } from 'react';
import './App.css';
import ModForm from './ModForm';
import type { ModEntry } from './modTypes';
import { listMods, addMod, updateMod } from './api';

export default function App() {
  const [mods, setMods] = useState<ModEntry[]>([]);
  const [editing, setEditing] = useState<ModEntry | null>(null);

  useEffect(() => {
    listMods().then(setMods);
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-4">
      <h1 className="text-3xl font-bold">Mods</h1>
      <ul className="space-y-2">
        {mods.map((m) => (
          <li key={m.id} className="flex justify-between items-center p-2 border rounded">
            <span>{m.name}</span>
            <button className="btn btn-sm" onClick={() => setEditing(m)}>
              Edit
            </button>
          </li>
        ))}
      </ul>
      <h2 className="text-2xl font-bold">
        {editing ? 'Edit Mod' : 'Add Mod'}
      </h2>
      <ModForm
        key={editing?.id ?? 'new'}
        initial={editing ?? undefined}
        onSubmit={async (mod) => {
          if (editing) {
            await updateMod(editing.id, mod);
          } else {
            await addMod(mod);
          }
          setMods(await listMods());
          setEditing(null);
        }}
      />
      {editing && (
        <button className="btn" type="button" onClick={() => setEditing(null)}>
          Cancel
        </button>
      )}
    </div>
  );
}

