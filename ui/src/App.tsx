import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Mods from './pages/Mods';
import Pagesv2 from './pages/Pagesv2';
import Images from './pages/Images';
import Pad from './pages/Pad';
import Upload from './pages/Upload';
import Icon from './pages/Icon';
import Validate from './pages/Validate';
import Othermods from './pages/Othermods';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Mods />} />
        <Route path="/mods" element={<Mods />} />
        <Route path="/pagesv2" element={<Pagesv2 />} />
        <Route path="/images" element={<Images />} />
        <Route path="/pad" element={<Pad />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/icon" element={<Icon />} />
        <Route path="/validate" element={<Validate />} />
        <Route path="/othermods" element={<Othermods />} />
      </Routes>
    </BrowserRouter>
  );
}
