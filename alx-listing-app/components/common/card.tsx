// components/common/Card.tsx
import React from 'react';

interface CardProps {
  title: string;
  description: string;
}

export const Card: React.FC<CardProps> = ({ title, description }) => (
  <div className="p-4 border rounded shadow-md">
    <h2 className="text-xl font-semibold">{title}</h2>
    <p>{description}</p>
  </div>
);
