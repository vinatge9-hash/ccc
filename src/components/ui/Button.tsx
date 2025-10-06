import React from 'react';\n\ntype ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: 'default'|'ghost'|'outline';
  size?: 'default'|'sm'|'lg'|'icon';
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({ children, className = '', variant = 'default', size = 'default', ...props }) => {
  const base = 'inline-flex items-center justify-center rounded-md transition-colors focus:outline-none';
  const variantCls = variant === 'ghost' ? 'bg-transparent hover:bg-muted text-foreground/90' : variant === 'outline' ? 'border border-border bg-background hover:bg-surface' : 'bg-primary text-primary-foreground';
  const sizeCls = size === 'icon' ? 'h-9 w-9 p-0' : size === 'sm' ? 'px-3 py-1 text-sm' : size === 'lg' ? 'px-6 py-3 text-lg' : 'px-4 py-2';
  return (
    <button className={`${base} ${variantCls} ${sizeCls} ${className}`} {...props as any}>{children}</button>
  );
};