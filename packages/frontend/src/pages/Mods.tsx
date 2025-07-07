import { useEffect, useState } from 'react';
import { PencilSquareIcon, XMarkIcon, TrashIcon, CubeIcon, FireIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import ModForm from '../ModForm';
import Layout from '../Layout';
import type { ModEntry } from '../utils/readMods';
import { listMods, addMod, updateMod, deleteMod } from '../api';
import { ModrinthClient } from '../modrinth';
import { applyModrinthAuth } from '../modrinth/core/OpenAPI';

export default function Mods() {
  const [mods, setMods] = useState<ModEntry[]>([]);
  const [editing, setEditing] = useState<ModEntry | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [downloads, setDownloads] = useState<Record<string, number>>({});

  useEffect(() => {
    const client = new ModrinthClient();
    applyModrinthAuth(client.request.config, {
      userAgent: 'modresources-ui',
    });
    listMods().then(async (modsData) => {
      setMods(modsData);
      const counts: Record<string, number> = {};
      for (const mod of modsData) {
        const slug = mod.ids?.modrinth;
        if (!slug) continue;
        try {
          const project = await client.projects.getProject(slug);
          counts[mod.id] = project.downloads;
        } catch {
          // ignore failures
        }
      }
      setDownloads(counts);
    });
  }, []);

  return (
    <Layout title="Mods">
      <div className="flex gap-6">
        <div className="space-y-4 min-w-60">
          <ul className="space-y-2">
            {mods.map((m) => (
              <li key={m.id} className="flex justify-between items-center p-2 rounded-box bg-base-200">
                <span>{m.name}</span>
                <span className="text-sm text-neutral">{downloads[m.id]?.toLocaleString() ?? '-'}</span>
                <div className="flex gap-2">
                  {m.urls?.modrinth && (
                    <a
                      href={m.urls.modrinth}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-info btn-sm"
                      aria-label="Modrinth"
                    >
                      <CubeIcon className="w-4 h-4" />
                    </a>
                  )}
                  {m.urls?.curseforge && (
                    <a
                      href={m.urls.curseforge}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-warning btn-sm"
                      aria-label="CurseForge"
                    >
                      <FireIcon className="w-4 h-4" />
                    </a>
                  )}
                  {m.urls?.source && (
                    <a
                      href={m.urls.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-neutral btn-sm"
                      aria-label="GitHub"
                    >
                      <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                    </a>
                  )}
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
