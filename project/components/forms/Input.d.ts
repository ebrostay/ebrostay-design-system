import React from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  hint?: string;
  /** Error message — turns the field red and replaces the hint. */
  error?: string;
  /** Leading icon node. */
  icon?: React.ReactNode;
  /** Trailing node (icon, button, unit). */
  trailing?: React.ReactNode;
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  containerStyle?: React.CSSProperties;
}

/** Labeled text field with focus ring, optional icons, hint and error states. */
export function Input(props: InputProps): JSX.Element;
