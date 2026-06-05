import type { ReactNode } from 'react';
import './Layout.css';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="layout">
      <header className="layout-header">
        <h1>Rush-POS</h1>
      </header>
      <main className="layout-main">{children}</main>
    </div>
  );
}
