import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

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
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'business');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const nextTheme = () => {
    const idx = themes.indexOf(theme);
    setTheme(themes[(idx + 1) % themes.length]);
  };

  return (
    <div className="navbar bg-base-100 mb-4">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Mod Tools
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/pagesv2">pagesv2</Link></li>
          <li><Link to="/images">images</Link></li>
          <li><Link to="/pad">pad</Link></li>
          <li><Link to="/upload">upload</Link></li>
          <li><Link to="/icon">icon</Link></li>
          <li><Link to="/validate">validate</Link></li>
          <li><Link to="/othermods">othermods</Link></li>
          <li><Link to="/mods">mods</Link></li>
        </ul>
        <button className="btn btn-ghost ml-2" onClick={nextTheme}>
          {theme}
        </button>
      </div>
    </div>
  );
}
