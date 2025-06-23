import { useState } from 'react';
import type { ModEntry, Dependency, PageSection } from '../../lib/readMods';
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
import { Input, Select, Button } from 'react-daisyui';

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

  const updateDep = (idx: number, field: keyof Dependency, value: any) => {
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

  const updatePage = (idx: number, field: keyof PageSection, value: any) => {
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
        <Input bordered value={mod.id} onChange={(e) => update('id', e.target.value)} />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <Input bordered value={mod.name} onChange={(e) => update('name', e.target.value)} />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Icon (comma separated)</span>
        </label>
        <Input
          bordered
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
      <fieldset className="fieldset border border-base-300 p-4 rounded-box">
        <legend className="fieldset-legend font-bold">Ids</legend>
        <label className="form-control fieldset-label">
          <span className="label-text">Modrinth</span>
          <Input
            bordered
            value={mod.ids?.modrinth ?? ''}
            onChange={(e) => update('ids', { ...mod.ids, modrinth: e.target.value })}
          />
        </label>
        <label className="form-control fieldset-label">
          <span className="label-text">CurseForge</span>
          <Input
            bordered
            value={mod.ids?.curseforge ?? ''}
            onChange={(e) => update('ids', { ...mod.ids, curseforge: e.target.value })}
          />
        </label>
      </fieldset>
      <fieldset className="fieldset border border-base-300 p-4 rounded-box">
        <legend className="fieldset-legend font-bold">Urls</legend>
        {(['modrinth', 'curseforge', 'source', 'issues', 'support', 'discord'] as const).map((key) => {
          const val = (mod.urls as any)?.[key] ?? '';
          return (
            <label key={key} className="form-control fieldset-label">
              <span className="label-text capitalize">{key}</span>
              {val && (
                <Button type="button" size="xs" color="secondary" onClick={() => window.open(val, '_blank')}>
                  <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                </Button>
              )}
              <Input bordered value={val} onChange={(e) => update('urls', { ...mod.urls, [key]: e.target.value })} />
            </label>
          );
        })}
      </fieldset>
      <fieldset className="fieldset space-y-2 border border-base-300 p-4 rounded-box">
        <legend className="fieldset-legend font-bold flex justify-between items-center">
          <span>Dependencies</span>
          <Button type="button" size="xs" onClick={addDep}>
            <PlusIcon className="w-4 h-4" />
          </Button>
        </legend>
        {mod.dependencies.map((dep, i) => (
          <div key={i} className="p-2 rounded space-y-2">
            <Input
              bordered
              className="w-full"
              placeholder="Name"
              value={dep.name}
              onChange={(e) => updateDep(i, 'name', e.target.value)}
            />
            <Select
              bordered
              className="w-full"
              value={dep.loader}
              onChange={(e) => updateDep(i, 'loader', e.target.value as Dependency['loader'])}
            >
              <option value="fabric">fabric</option>
              <option value="forge">forge</option>
              <option value="neoforge">neoforge</option>
              <option value="all">all</option>
            </Select>
            <Input
              bordered
              className="w-full"
              placeholder="Modrinth URL"
              value={dep.modrinthUrl}
              onChange={(e) => updateDep(i, 'modrinthUrl', e.target.value)}
            />
            <Input
              bordered
              className="w-full"
              placeholder="CurseForge URL"
              value={dep.curseforgeUrl}
              onChange={(e) => updateDep(i, 'curseforgeUrl', e.target.value)}
            />
            <Input
              bordered
              className="w-full"
              placeholder="Notes"
              value={dep.notes ?? ''}
              onChange={(e) => updateDep(i, 'notes', e.target.value)}
            />
            <Button type="button" color="error" size="sm" onClick={() => removeDep(i)}>
              <TrashIcon className="w-4 h-4" />
            </Button>
          </div>
        ))}
      </fieldset>
      <fieldset className="fieldset space-y-2 border border-base-300 p-4 rounded-box">
        <legend className="fieldset-legend font-bold flex justify-between items-center">
          <span>Pages</span>
          <Button type="button" size="xs" onClick={addPage}>
            <PlusIcon className="w-4 h-4" />
          </Button>
        </legend>
        {mod.pages.map((p, i) => (
          <div key={i} className="p-2 rounded space-y-2">
            <Input
              bordered
              className="w-full"
              placeholder="Title"
              value={p.title}
              onChange={(e) => updatePage(i, 'title', e.target.value)}
            />
            <Input
              bordered
              className="w-full"
              type="number"
              placeholder="Level"
              value={p.level}
              onChange={(e) => updatePage(i, 'level', parseInt(e.target.value))}
            />
            <MDXEditor
              className="dark-editor"
              markdown={p.content}
              onChange={(v) => updatePage(i, 'content', v)}
              plugins={[
                headingsPlugin(),
                listsPlugin(),
                quotePlugin(),
                linkPlugin(),
                markdownShortcutPlugin(),
                toolbarPlugin({ toolbarContents: () => <MinimalToolbar /> }),
              ]}
            />
            <Button type="button" color="error" size="sm" onClick={() => removePage(i)}>
              <TrashIcon className="w-4 h-4" />
            </Button>
          </div>
        ))}
      </fieldset>
      <Button color="primary" type="submit">
        <CheckIcon className="w-4 h-4" />
      </Button>
    </form>
  );
}
