import { useState } from 'react'
import { ModEntry, Dependency, PageSection } from './api'

interface Props {
  initial?: ModEntry
  onSubmit(mod: ModEntry): void
}

export default function ModForm({ initial, onSubmit }: Props) {
  const [mod, setMod] = useState<ModEntry>(
    initial ?? {
      id: '',
      name: '',
      icon: [],
      ids: {},
      urls: {},
      dependencies: [],
      pages: [],
    }
  )

  function handleChange<K extends keyof ModEntry>(key: K, value: ModEntry[K]) {
    setMod({ ...mod, [key]: value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    onSubmit(mod)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Id <input value={mod.id} onChange={e => handleChange('id', e.target.value)} /></label>
      </div>
      <div>
        <label>Name <input value={mod.name} onChange={e => handleChange('name', e.target.value)} /></label>
      </div>
      <div>
        <label>Icon (comma separated)
          <input value={mod.icon?.join(',')}
            onChange={e => handleChange('icon', e.target.value.split(',').map(s => s.trim()).filter(Boolean))} />
        </label>
      </div>
      <div>
        <label>Modrinth ID <input value={mod.ids?.modrinth ?? ''}
          onChange={e => handleChange('ids', { ...mod.ids, modrinth: e.target.value })} /></label>
      </div>
      <div>
        <label>CurseForge ID <input value={mod.ids?.curseforge ?? ''}
          onChange={e => handleChange('ids', { ...mod.ids, curseforge: e.target.value })} /></label>
      </div>
      <div>
        <label>Dependencies JSON
          <textarea value={JSON.stringify(mod.dependencies, null, 2)}
            onChange={e => handleChange('dependencies', safeParseArray<Dependency>(e.target.value))} />
        </label>
      </div>
      <div>
        <label>Pages JSON
          <textarea value={JSON.stringify(mod.pages, null, 2)}
            onChange={e => handleChange('pages', safeParseArray<PageSection>(e.target.value))} />
        </label>
      </div>
      <button type="submit">Save</button>
    </form>
  )
}

function safeParseArray<T>(text: string): T[] {
  try {
    const val = JSON.parse(text)
    return Array.isArray(val) ? val : []
  } catch {
    return []
  }
}
