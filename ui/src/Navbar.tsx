import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const pages = [
  { path: '/', label: 'mods' },
  { path: '/pagesv2', label: 'pagesv2' },
  { path: '/images', label: 'images' },
  { path: '/pad', label: 'pad' },
  { path: '/upload', label: 'upload' },
  { path: '/icon', label: 'icon' },
  { path: '/validate', label: 'validate' },
  { path: '/othermods', label: 'othermods' },
];

const themes = [
  'light',
  'dark',
  'cupcake',
  'bumblebee',
  'emerald',
  'corporate',
  'synthwave',
  'retro',
  'cyberpunk',
  'valentine',
  'halloween',
  'garden',
  'forest',
  'aqua',
  'lofi',
  'pastel',
  'fantasy',
  'wireframe',
  'black',
  'luxury',
  'dracula',
  'cmyk',
  'autumn',
  'business',
  'acid',
  'lemonade',
  'night',
  'coffee',
  'winter',
  'dim',
  'nord',
  'sunset',
  'dark2',
];

export default function Navbar() {
  const location = useLocation();
  const [themeIndex, setThemeIndex] = useState(() => {
    const current = document.documentElement.dataset.theme || 'light';
    const idx = themes.indexOf(current);
    return idx >= 0 ? idx : 0;
  });

  const cycleTheme = () => {
    const next = (themeIndex + 1) % themes.length;
    setThemeIndex(next);
    document.documentElement.setAttribute('data-theme', themes[next]);
  };

  return (
    <div className="navbar bg-base-300 mb-4">
      <div className="flex-1">
        <span className="btn btn-ghost normal-case text-xl">Mod Tools</span>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {pages.map((p) => (
            <li key={p.path}>
              <Link className={location.pathname === p.path ? 'active' : ''} to={p.path}>
                {p.label}
              </Link>
            </li>
          ))}
        </ul>
        <button className="btn btn-ghost" onClick={cycleTheme}>
          Theme
        </button>
      </div>
    </div>
  );
}
