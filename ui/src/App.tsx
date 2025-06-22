import { useEffect, useState } from 'react'
import ModForm from './ModForm'
import { ModEntry, listMods, addMod } from './api'
import './App.css'

export default function App() {
  const [mods, setMods] = useState<ModEntry[]>([])

  useEffect(() => {
    listMods().then(setMods).catch((e) => console.error(e))
  }, [])

  function handleAdd(mod: ModEntry) {
    addMod(mod)
      .then(() => listMods().then(setMods))
      .catch((e) => alert(e.message))
  }

  return (
    <div className="App">
      <h1>Mods</h1>
      <ul>
        {mods.map((m) => (
          <li key={m.id}>{m.name}</li>
        ))}
      </ul>
      <h2>Add Mod</h2>
      <ModForm onSubmit={handleAdd} />
    </div>
  )
}
