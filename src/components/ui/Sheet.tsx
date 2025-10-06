import React, { createContext, useContext, useState } from 'react';

type SheetContextType = { open: boolean; setOpen: (v: boolean) => void; } | null;
const SheetContext = createContext<SheetContextType>(null);

export const Sheet: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const value = { open, setOpen };
  return (
    <SheetContext.Provider value={value}>
      {children}
      {open && (
        <div className="fixed inset-0 z-40 bg-black/50" onClick={() => setOpen(false)} />
      )}
    </SheetContext.Provider>
  );
};

export const SheetTrigger: React.FC<{ asChild?: boolean; children: React.ReactElement<any> }> = ({ children }) => {
  const ctx = useContext(SheetContext);
  if (!ctx) return <>{children}</>;
  return React.cloneElement(children, { onClick: () => ctx.setOpen(true) });
};

export const SheetContent: React.FC<{ side?: 'left'|'right'|'top'|'bottom'; children: React.ReactNode; }> = ({ side='left', children }) => {
  const ctx = useContext(SheetContext);
  if (!ctx) return <>{children}</>;
  const align = side === 'left' ? 'left-0' : side === 'right' ? 'right-0' : 'left-0';
  return (
    <aside className={`fixed top-0 ${align} h-full w-72 bg-background border-r border-border p-4 z-50`}>{children}</aside>
  );
};