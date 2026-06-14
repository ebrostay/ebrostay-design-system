import React from 'react';

export interface IconButtonProps {
  /** A single icon node, e.g. <i data-lucide="heart" />. */
  children?: React.ReactNode;
  /** Accessible label (also the tooltip). */
  label?: string;
  /** @default "secondary" */
  variant?: 'solid' | 'secondary' | 'ghost' | 'glass';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Fully round instead of soft square. @default false */
  round?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

/**
 * Icon-only button. `glass` variant (blurred translucent) is for overlaying on
 * property photos — e.g. the favorite heart and gallery controls.
 */
export function IconButton(props: IconButtonProps): JSX.Element;
