import type { ReactNode } from 'react';

interface Props {
  title: string;
  children: ReactNode;
}

export default function Layout({ title, children }: Props) {
  return (
    <div className="max-w-6xl mx-auto p-4 space-y-4">
      <h1 className="text-3xl font-bold text-primary capitalize">{title}</h1>
      {children}
    </div>
  );
}
