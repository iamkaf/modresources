import { useEffect, useState } from 'react';
import { PencilSquareIcon, XMarkIcon } from '@heroicons/react/24/solid';
import ModForm from '../ModForm';
import Layout from '../Layout';
import type { ModEntry } from '../../../lib/readMods';
import { listMods, addMod, updateMod } from '../api';
import { Button, Alert } from 'react-daisyui';

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
                <Button color="accent" size="sm" onClick={() => setEditing(m)}>
                  <PencilSquareIcon className="w-4 h-4" />
                </Button>
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
            <Button color="error" variant="outline" type="button" onClick={() => setEditing(null)}>
              <XMarkIcon className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
      {message && (
        <div className="toast toast-top toast-end">
          <Alert status="success">{message}</Alert>
        </div>
      )}
    </Layout>
  );
}
