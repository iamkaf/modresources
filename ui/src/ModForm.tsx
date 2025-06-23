import { useState } from 'react';
import type { ModEntry, Dependency, PageSection } from './modTypes';
import {
  PlusIcon,
  TrashIcon,
  ArrowTopRightOnSquareIcon,
  CheckIcon,
} from '@heroicons/react/24/solid';
import {
  MDXEditor,
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  markdownShortcutPlugin,
} from '@mdxeditor/editor';
import '@mdxeditor/editor/style.css';

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

  const update = <K extends keyof ModEntry>(field: K, value: ModEntry[K]) => {
    setMod({ ...mod, [field]: value });
  };

  const updateDep = <K extends keyof Dependency>(
    idx: number,
    field: K,
    value: Dependency[K],
  ) => {
    const deps = [...mod.dependencies];
    deps[idx] = { ...deps[idx], [field]: value } as Dependency;
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

  const updatePage = <K extends keyof PageSection>(
    idx: number,
    field: K,
    value: PageSection[K],
  ) => {
    const pages = [...mod.pages];
    pages[idx] = { ...pages[idx], [field]: value } as PageSection;
    update('pages', pages);
  };

  const addPage = () => {
    update('pages', [...mod.pages, { title: '', level: 1, content: '' }]);
  };

  const removePage = (idx: number) => {
    const pages = [...mod.pages];
    pages.splice(idx, 1);
    update('pages', pages);
  };

  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(mod);
      }}
    >
      <div className="form-control">
        <label className="label">
          <span className="label-text">Id</span>
        </label>
        <input className="input input-bordered" value={mod.id} onChange={(e) => update('id', e.target.value)} />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input className="input input-bordered" value={mod.name} onChange={(e) => update('name', e.target.value)} />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Icon (comma separated)</span>
        </label>
        <input
          className="input input-bordered"
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
      </div>
      <fieldset className="border border-base-300 p-4 rounded-box">
        <legend className="font-bold">Ids</legend>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Modrinth</span>
          </label>
          <input
            className="input input-bordered"
            value={mod.ids?.modrinth ?? ''}
            onChange={(e) => update('ids', { ...mod.ids, modrinth: e.target.value })}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">CurseForge</span>
          </label>
          <input
            className="input input-bordered"
            value={mod.ids?.curseforge ?? ''}
            onChange={(e) => update('ids', { ...mod.ids, curseforge: e.target.value })}
          />
        </div>
      </fieldset>
      <fieldset className="border border-base-300 p-4 rounded-box">
        <legend className="font-bold">Urls</legend>
        {(
          ['modrinth', 'curseforge', 'source', 'issues', 'support', 'discord'] as const
        ).map((key) => {
          const val = mod.urls?.[key] ?? '';
          return (
            <div key={key} className="form-control">
              <label className="label justify-between">
                <span className="label-text capitalize">{key}</span>
                {val && (
                  <button
                    type="button"
                    className="btn btn-xs btn-secondary flex gap-1 items-center"
                    onClick={() => window.open(val, '_blank')}
                  >
                    <ArrowTopRightOnSquareIcon className="h-3 w-3" />
                    Open
                  </button>
                )}
              </label>
              <input
                className="input input-bordered"
                value={val}
                onChange={(e) => update('urls', { ...mod.urls, [key]: e.target.value })}
              />
            </div>
          );
        })}
      </fieldset>
      <fieldset className="space-y-2 border border-base-300 p-4 rounded-box">
        <legend className="font-bold flex justify-between items-center">
          <span>Dependencies</span>
          <button
            type="button"
            className="btn btn-xs flex gap-1 items-center"
            onClick={addDep}
          >
            <PlusIcon className="h-3 w-3" />
            Add
          </button>
        </legend>
        {mod.dependencies.map((dep, i) => (
          <div key={i} className="border p-2 rounded space-y-2">
            <input
              className="input input-bordered w-full"
              placeholder="Name"
              value={dep.name}
              onChange={(e) => updateDep(i, 'name', e.target.value)}
            />
            <select
              className="select select-bordered w-full"
              value={dep.loader}
              onChange={(e) => updateDep(i, 'loader', e.target.value as Dependency['loader'])}
            >
              <option value="fabric">fabric</option>
              <option value="forge">forge</option>
              <option value="neoforge">neoforge</option>
              <option value="all">all</option>
            </select>
            <input
              className="input input-bordered w-full"
              placeholder="Modrinth URL"
              value={dep.modrinthUrl}
              onChange={(e) => updateDep(i, 'modrinthUrl', e.target.value)}
            />
            <input
              className="input input-bordered w-full"
              placeholder="CurseForge URL"
              value={dep.curseforgeUrl}
              onChange={(e) => updateDep(i, 'curseforgeUrl', e.target.value)}
            />
            <input
              className="input input-bordered w-full"
              placeholder="Notes"
              value={dep.notes ?? ''}
              onChange={(e) => updateDep(i, 'notes', e.target.value)}
            />
            <button
              type="button"
              className="btn btn-error btn-sm flex gap-1 items-center"
              onClick={() => removeDep(i)}
            >
              <TrashIcon className="h-4 w-4" />
              Remove
            </button>
          </div>
        ))}
      </fieldset>
      <fieldset className="space-y-2 border border-base-300 p-4 rounded-box">
        <legend className="font-bold flex justify-between items-center">
          <span>Pages</span>
          <button
            type="button"
            className="btn btn-xs flex gap-1 items-center"
            onClick={addPage}
          >
            <PlusIcon className="h-3 w-3" />
            Add
          </button>
        </legend>
        {mod.pages.map((p, i) => (
          <div key={i} className="border p-2 rounded space-y-2">
            <input
              className="input input-bordered w-full"
              placeholder="Title"
              value={p.title}
              onChange={(e) => updatePage(i, 'title', e.target.value)}
            />
            <input
              className="input input-bordered w-full"
              type="number"
              placeholder="Level"
              value={p.level}
              onChange={(e) => updatePage(i, 'level', parseInt(e.target.value))}
            />
            <MDXEditor
              markdown={p.content}
              onChange={(val) => updatePage(i, 'content', val)}
              plugins={[
                headingsPlugin(),
                listsPlugin(),
                quotePlugin(),
                thematicBreakPlugin(),
                markdownShortcutPlugin(),
              ]}
              className="border rounded min-h-[120px] p-2"
            />
            <button
              type="button"
              className="btn btn-error btn-sm flex gap-1 items-center"
              onClick={() => removePage(i)}
            >
              <TrashIcon className="h-4 w-4" />
              Remove
            </button>
          </div>
        ))}
      </fieldset>
      <button className="btn btn-primary flex gap-1 items-center" type="submit">
        <CheckIcon className="h-4 w-4" />
        Save
      </button>
    </form>
  );
}
