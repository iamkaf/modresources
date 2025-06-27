import { useEffect, useState } from 'react';
import { PencilSquareIcon, XMarkIcon, TrashIcon } from '@heroicons/react/24/solid';
import ModForm from '../ModForm';
import Layout from '../Layout';
import type { ModEntry } from '../../../lib/readMods';
import { listMods, addMod, updateMod, deleteMod } from '../api';

export default function Mods() {
  const [mods, setMods] = useState<ModEntry[]>([]);
  const [editing, setEditing] = useState<ModEntry | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    listMods().then(setMods);
  }, []);

  return (
    <Layout title="Mods">
      <div className="flex gap-6">
        <div className="space-y-4 min-w-60">
          <ul className="space-y-2">
            {mods.map((m) => (
              <li key={m.id} className="flex justify-between items-center p-2 rounded-box bg-base-200">
                <span>{m.name}</span>
                <div className="flex gap-2">
                  <button className="btn btn-accent btn-sm" onClick={() => setEditing(m)}>
                    <PencilSquareIcon className="w-4 h-4" />
                  </button>
                  <button
                    className="btn btn-error btn-sm"
                    onClick={async () => {
                      try {
                        await deleteMod(m.id);
                        setMods(await listMods());
                        setMessage('Removed!');
                        setTimeout(() => setMessage(null), 2000);
                      } catch (err) {
                        alert('Failed to delete mod');
                        console.error(err);
                      }
                    }}
                  >
                    <TrashIcon className="w-4 h-4" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4 w-full">
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
            <button className="btn btn-outline btn-error" type="button" onClick={() => setEditing(null)}>
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
    </Layout>
  );
}
