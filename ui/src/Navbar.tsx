import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Navbar as DNavbar, Menu, Button, Dropdown } from 'react-daisyui';
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
    <DNavbar className="bg-base-300 mb-4">
      <DNavbar.Start>
        <Button color="ghost" className="normal-case text-xl gap-2" tag="span">
          <Cog6ToothIcon className="w-6 h-6" />
          Mod Tools
        </Button>
      </DNavbar.Start>
      <DNavbar.End className="gap-2">
        <Menu horizontal className="px-1 gap-1">
          {pages.map((p) => {
            const Icon = p.icon;
            const active = location.pathname === p.path;
            return (
              <Menu.Item key={p.path}>
                <Button tag={Link} to={p.path} size="sm" color={active ? 'primary' : 'ghost'} className="gap-1">
                  <Icon className="w-5 h-5" />
                  <span className="capitalize">{p.label}</span>
                </Button>
              </Menu.Item>
            );
          })}
        </Menu>
        <Dropdown end>
          <Dropdown.Toggle button color="ghost" className="gap-1">
            <SwatchIcon className="w-5 h-5" />
            <ChevronDownIcon className="w-4 h-4" />
          </Dropdown.Toggle>
          <Dropdown.Menu className="w-40 max-h-60 overflow-y-auto">
            {themes.map((t) => (
              <Dropdown.Item key={t}>
                <Button
                  tag="span"
                  className={`capitalize ${theme === t ? 'active' : ''}`}
                  onClick={() => changeTheme(t)}
                >
                  {t}
                </Button>
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </DNavbar.End>
    </DNavbar>
  );
}
