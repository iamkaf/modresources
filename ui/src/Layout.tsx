import { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
  return <div className="max-w-6xl mx-auto p-4">{children}</div>;
}
