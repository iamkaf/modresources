import { useState, useRef, useEffect } from 'react';
import type { ModEntry, Dependency } from './utils/readMods';
import { PlusIcon, TrashIcon, ArrowTopRightOnSquareIcon, CheckIcon } from '@heroicons/react/24/solid';
import {
  MDXEditor,
  toolbarPlugin,
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  linkPlugin,
  markdownShortcutPlugin,
} from '@mdxeditor/editor';
import '@mdxeditor/editor/style.css';
import { MinimalToolbar } from './MinimalToolbar';
import { listTemplatesApi, fetchTemplateApi } from './api';
import type { MDXEditorMethods } from '@mdxeditor/editor';

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
  readme: '',
};

export default function ModForm({ onSubmit, initial }: Props) {
  const [mod, setMod] = useState<ModEntry>(initial ?? empty);
  const [templates, setTemplates] = useState<string[]>([]);
  const editorRef = useRef<MDXEditorMethods>(null);

  useEffect(() => {
    listTemplatesApi()
      .then(setTemplates)
      .catch(() => {});
  }, []);

  const update = <K extends keyof ModEntry>(field: K, value: ModEntry[K]) => {
    setMod({ ...mod, [field]: value });
  };

  const updateDep = <K extends keyof Dependency>(idx: number, field: K, value: Dependency[K]) => {
    const deps = [...mod.dependencies];
    deps[idx] = { ...deps[idx], [field]: value };
    update('dependencies', deps);
  };

  const addDep = () => {
    update('dependencies', [
      ...mod.dependencies,
      { name: '', loader: 'fabric', modrinthUrl: '', curseforgeUrl: '', notes: '' },
    ]);
  };

  const removeDep = (idx: number) => {
    const deps = [...mod.dependencies];
    deps.splice(idx, 1);
    update('dependencies', deps);
  };

  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(mod);
      }}
    >
      <fieldset className="fieldset border border-base-300 p-4 rounded-md">
        <legend className="fieldset-legend font-bold">Basic Information</legend>
        <label className="flex flex-col gap-1">
          <span className="label">Id</span>
          <input className="input" value={mod.id} onChange={(e) => update('id', e.target.value)} />
        </label>
        <label className="flex flex-col gap-1">
          <span className="label">Name</span>
          <input className="input" value={mod.name} onChange={(e) => update('name', e.target.value)} />
        </label>
        <label className="flex flex-col gap-1">
          <span className="label">Icon (comma separated)</span>
          <input
            className="input"
            value={mod.icon?.join(',')}
            onChange={(e) =>
              update(
                'icon',
                e.target.value
                  .split(',')
                  .map((s) => s.trim())
                  .filter(Boolean),
              )
            }
          />
        </label>
      </fieldset>
      <fieldset className="fieldset border border-base-300 p-4 rounded-md">
        <legend className="fieldset-legend font-bold">IDs</legend>
        <label className="flex flex-col gap-1">
          <span className="label">Modrinth</span>
          <input
            className="input"
            value={mod.ids?.modrinth ?? ''}
            onChange={(e) => update('ids', { ...mod.ids, modrinth: e.target.value })}
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className="label">CurseForge</span>
          <input
            className="input"
            value={mod.ids?.curseforge ?? ''}
            onChange={(e) => update('ids', { ...mod.ids, curseforge: e.target.value })}
          />
        </label>
      </fieldset>
      <fieldset className="fieldset border border-base-300 p-4 rounded-md">
        <legend className="fieldset-legend font-bold">URLs</legend>
        {(['modrinth', 'curseforge', 'source', 'issues', 'support', 'discord'] as const).map((key) => {
          const val = (mod.urls as any)?.[key] ?? '';
          return (
            <label key={key} className="flex flex-col gap-1">
              <span className="label capitalize">{key}</span>
              <div className="flex flex-row">
                <input
                  className="input"
                  value={val}
                  onChange={(e) => update('urls', { ...mod.urls, [key]: e.target.value })}
                />
                {val && (
                  <button type="button" className="btn btn-md btn-secondary" onClick={() => window.open(val, '_blank')}>
                    <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                  </button>
                )}
              </div>
            </label>
          );
        })}
      </fieldset>
      <fieldset className="fieldset space-y-2 border border-base-300 p-4 rounded-md">
        <legend className="fieldset-legend font-bold flex justify-between items-center">
          <span>Dependencies</span>
          <button type="button" className="btn btn-xs" onClick={addDep}>
            <PlusIcon className="w-4 h-4" />
          </button>
        </legend>
        {mod.dependencies.map((dep, i) => (
          <div key={i} className="p-2 rounded space-y-2">
            <input
              className="input w-full"
              placeholder="Name"
              value={dep.name}
              onChange={(e) => updateDep(i, 'name', e.target.value)}
            />
            <select
              className="select w-full"
              value={dep.loader}
              onChange={(e) => updateDep(i, 'loader', e.target.value as Dependency['loader'])}
            >
              <option value="fabric">fabric</option>
              <option value="forge">forge</option>
              <option value="neoforge">neoforge</option>
              <option value="all">all</option>
            </select>
            <input
              className="input w-full"
              placeholder="Modrinth URL"
              value={dep.modrinthUrl}
              onChange={(e) => updateDep(i, 'modrinthUrl', e.target.value)}
            />
            <input
              className="input w-full"
              placeholder="CurseForge URL"
              value={dep.curseforgeUrl}
              onChange={(e) => updateDep(i, 'curseforgeUrl', e.target.value)}
            />
            <input
              className="input w-full"
              placeholder="Notes"
              value={dep.notes ?? ''}
              onChange={(e) => updateDep(i, 'notes', e.target.value)}
            />
            <button type="button" className="btn btn-error btn-sm" onClick={() => removeDep(i)}>
              <TrashIcon className="w-4 h-4" />
            </button>
          </div>
        ))}
      </fieldset>
      <fieldset className="fieldset space-y-2 border border-base-300 p-4 rounded-md">
        <legend className="fieldset-legend font-bold">README</legend>
        <p className="text-sm text-neutral">
          Use <code>{'{{name}}'}</code>, <code>{'{{id}}'}</code> or any other field from the mod entry. Templates can be
          inserted below.
        </p>
        {templates.length > 0 && (
          <select
            className="select w-full"
            onChange={async (e) => {
              const name = e.target.value;
              if (!name) return;
              const text = await fetchTemplateApi(name);
              editorRef.current?.insertMarkdown(text + '\n');
              e.target.selectedIndex = 0;
            }}
          >
            <option value="">Insert template...</option>
            {templates.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        )}
        <MDXEditor
          ref={editorRef}
          className="dark-editor"
          markdown={mod.readme ?? ''}
          onChange={(v) => update('readme', v)}
          plugins={[
            headingsPlugin(),
            listsPlugin(),
            quotePlugin(),
            linkPlugin(),
            markdownShortcutPlugin(),
            toolbarPlugin({ toolbarContents: () => <MinimalToolbar /> }),
          ]}
        />
      </fieldset>
      <button className="btn btn-primary" type="submit">
        <CheckIcon className="w-4 h-4" />
      </button>
    </form>
  );
}
