import { useState } from 'react';
import type { ModEntry } from './modTypes';

interface Props {
  onSubmit: (mod: ModEntry) => void;
  initial?: ModEntry;
}

const empty: ModEntry = {
  id: '',
  name: '',
  icon: [],
  ids: {},
  urls: {},
  dependencies: [],
  pages: [],
};

export default function ModForm({ onSubmit, initial }: Props) {
  const [mod, setMod] = useState<ModEntry>(initial ?? empty);

  const update = (field: keyof ModEntry, value: any) => {
    setMod({ ...mod, [field]: value });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(mod);
      }}
    >
      <div>
        <label>
          Id
          <input
            value={mod.id}
            onChange={(e) => update('id', e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Name
          <input
            value={mod.name}
            onChange={(e) => update('name', e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Icon (comma separated)
          <input
            value={mod.icon?.join(',')}
            onChange={(e) =>
              update(
                'icon',
                e.target.value
                  .split(',')
                  .map((s) => s.trim())
                  .filter(Boolean)
              )
            }
          />
        </label>
      </div>
      <fieldset>
        <legend>Ids</legend>
        <div>
          <label>
            Modrinth
            <input
              value={mod.ids?.modrinth ?? ''}
              onChange={(e) =>
                update('ids', { ...mod.ids, modrinth: e.target.value })
              }
            />
          </label>
        </div>
        <div>
          <label>
            CurseForge
            <input
              value={mod.ids?.curseforge ?? ''}
              onChange={(e) =>
                update('ids', { ...mod.ids, curseforge: e.target.value })
              }
            />
          </label>
        </div>
      </fieldset>
      <fieldset>
        <legend>Urls</legend>
        {(
          [
            'modrinth',
            'curseforge',
            'source',
            'issues',
            'support',
            'discord',
          ] as const
        ).map((key) => (
          <div key={key}>
            <label>
              {key}
              <input
                value={(mod.urls as any)?.[key] ?? ''}
                onChange={(e) =>
                  update('urls', { ...mod.urls, [key]: e.target.value })
                }
              />
            </label>
          </div>
        ))}
      </fieldset>
      <div>
        <label>
          Dependencies (JSON)
          <textarea
            value={JSON.stringify(mod.dependencies, null, 2)}
            onChange={(e) =>
              update('dependencies', JSON.parse(e.target.value || '[]'))
            }
          />
        </label>
      </div>
      <div>
        <label>
          Pages (JSON)
          <textarea
            value={JSON.stringify(mod.pages, null, 2)}
            onChange={(e) => update('pages', JSON.parse(e.target.value || '[]'))}
          />
        </label>
      </div>
      <button type="submit">Save</button>
    </form>
  );
}

