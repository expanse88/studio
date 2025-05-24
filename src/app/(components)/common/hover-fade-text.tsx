// src/app/(components)/common/hover-fade-text.tsx
"use client";

import React from 'react';

interface HoverFadeTextProps {
  text: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  wordClassName?: string;
}

export const HoverFadeText: React.FC<HoverFadeTextProps> = ({
  text,
  as: Component = 'span',
  className = '',
  wordClassName = "inline-block transition-opacity duration-300 ease-in-out hover:opacity-30"
}) => {
  if (!text) return null; // Handle empty or undefined text gracefully

  return (
    <Component className={className}>
      {text.split(' ').map((word, index, wordsArray) => (
        <React.Fragment key={index}>
          <span className={wordClassName}>
            {word}
          </span>
          {index < wordsArray.length - 1 && '\u00A0'}
        </React.Fragment>
      ))}
    </Component>
  );
};
