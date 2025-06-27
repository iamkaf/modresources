import { render, screen } from '@testing-library/react';
import App from '../App';
import { vi } from 'vitest';

vi.mock('../api', () => ({
  listMods: () => Promise.resolve([]),
  addMod: vi.fn(),
  updateMod: vi.fn(),
  deleteMod: vi.fn(),
  generatePagesV2: vi.fn(),
  generateIcons: vi.fn(),
  uploadPage: vi.fn(),
  validateMods: vi.fn(),
  generateOtherMods: vi.fn(),
  listImagesApi: () => Promise.resolve({}),
}));

test('renders navbar', () => {
  render(<App />);
  expect(screen.getByText(/Mod Tools/i)).toBeInTheDocument();
});
