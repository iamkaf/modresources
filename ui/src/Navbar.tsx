import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  WrenchScrewdriverIcon,
  ClipboardDocumentListIcon,
  PhotoIcon,
  PencilIcon,
  CloudArrowUpIcon,
  SparklesIcon,
  CheckCircleIcon,
  PuzzlePieceIcon,
  SwatchIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/solid';

const pages = [
  { path: '/', label: 'mods', icon: WrenchScrewdriverIcon },
  { path: '/pagesv2', label: 'pagesv2', icon: ClipboardDocumentListIcon },
  { path: '/images', label: 'images', icon: PhotoIcon },
  { path: '/pad', label: 'pad', icon: PencilIcon },
  { path: '/upload', label: 'upload', icon: CloudArrowUpIcon },
  { path: '/icon', label: 'icon', icon: SparklesIcon },
  { path: '/validate', label: 'validate', icon: CheckCircleIcon },
  { path: '/othermods', label: 'othermods', icon: PuzzlePieceIcon },
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
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem('theme');
    if (stored && themes.includes(stored)) {
      return stored;
    }
    const current = document.documentElement.dataset.theme || 'light';
    return themes.includes(current) ? current : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const changeTheme = (t: string) => {
    setTheme(t);
  };

  return (
    <div className="navbar bg-base-300 mb-4">
      <div className="flex-1">
        <span className="btn btn-ghost normal-case text-xl flex gap-2 items-center">
          <Cog6ToothIcon className="w-6 h-6" />
          Mod Tools
        </span>
      </div>
      <div className="flex-none gap-2">
        <ul className="menu menu-horizontal px-1 gap-1">
          {pages.map((p) => {
            const Icon = p.icon;
            const active = location.pathname === p.path;
            return (
              <li key={p.path}>
                <Link
                  to={p.path}
                  className={`btn btn-sm flex gap-1 items-center ${active ? 'btn-primary' : 'btn-ghost'}`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="capitalize">{p.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost flex gap-1 items-center">
            <SwatchIcon className="w-5 h-5" />
            <ChevronDownIcon className="w-4 h-4" />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-40 max-h-60 overflow-y-auto"
          >
            {themes.map((t) => (
              <li key={t}>
                <button className={`capitalize ${theme === t ? 'active' : ''}`} onClick={() => changeTheme(t)}>
                  {t}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
