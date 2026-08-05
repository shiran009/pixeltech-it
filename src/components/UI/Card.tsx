import React from 'react';

interface CardProps {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  className = '',
  onClick,
  children,
}) => {
  const combinedClasses = `glass-card ${className}`.trim();

  return (
    <div className={combinedClasses} onClick={onClick}>
      {children}
    </div>
  );
};
