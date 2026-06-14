import React from 'react';

export interface SwitchProps {
  label?: React.ReactNode;
  checked?: boolean;
  onChange?: (checked: boolean, e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  id?: string;
  style?: React.CSSProperties;
}

/** Toggle switch with spring thumb animation. */
export function Switch(props: SwitchProps): JSX.Element;
