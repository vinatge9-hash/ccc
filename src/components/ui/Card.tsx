import React from 'react';

type CardProps = {
  title: string;
  description?: string;
  price?: string;
  image?: string;
};

export const Card: React.FC<CardProps> = ({ title, description, price, image }) => {
  return (
    <div className="rounded-lg border border-border bg-card p-4 h-full flex-flex-col">
      {image && <img src={image} alt={title} className="h-40 w-full object-cover rounded" />}
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
      {description && <p className="text-sm text-muted mt-1">{description}</p>}
      {price && <span className="mt-2 inline-block text-sm font-medium">{price}</span>}
    </div>
  );
};