import React from 'react';

export interface CardProps {
  children?: React.ReactNode;
  /** Inner padding. @default "md" */
  padding?: 'sm' | 'md' | 'lg' | string;
  /** Hover lift + shadow. @default false */
  interactive?: boolean;
  /** @default "sm" */
  elevation?: 'none' | 'sm' | 'md' | 'lg';
  as?: any;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

/** Generic white surface container — 16px corners, warm shadow. Composes most panels. */
export function Card(props: CardProps): JSX.Element;
