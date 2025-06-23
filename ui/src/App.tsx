import { useEffect, useState } from 'react';
import { PencilSquareIcon, XMarkIcon } from '@heroicons/react/24/solid';
import './App.css';
import ModForm from './ModForm';
import type { ModEntry } from '../../lib/readMods.js';
import { listMods, addMod, updateMod } from './api';

export default function App() {
  const [mods, setMods] = useState<ModEntry[]>([]);
  const [editing, setEditing] = useState<ModEntry | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    listMods().then(setMods);
  }, []);

  return (
    <>
      <div className="max-w-6xl mx-auto p-4 grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-primary">Mods</h1>
          <ul className="space-y-2">
            {mods.map((m) => (
              <li key={m.id} className="flex justify-between items-center p-2 border rounded-box bg-base-200">
                <span>{m.name}</span>
                <button className="btn btn-accent btn-sm" onClick={() => setEditing(m)}>
                  <PencilSquareIcon className="w-4 h-4" />
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-secondary">{editing ? 'Edit Mod' : 'Add Mod'}</h2>
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
              setMessage('Saved! 🎉');
              setTimeout(() => setMessage(null), 2000);
            }}
          />
          {editing && (
            <button className="btn btn-outline" type="button" onClick={() => setEditing(null)}>
              <XMarkIcon className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
      {message && (
        <div className="toast toast-top toast-end">
          <div className="alert alert-success">{message}</div>
        </div>
      )}
    </>
  );
}
