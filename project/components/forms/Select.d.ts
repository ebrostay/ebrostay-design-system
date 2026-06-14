import React from 'react';

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  label?: string;
  hint?: string;
  error?: string;
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
  containerStyle?: React.CSSProperties;
}

/** Styled native <select> with custom chevron and brand focus ring. */
export function Select(props: SelectProps): JSX.Element;
