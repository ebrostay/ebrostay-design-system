import React from 'react';

export interface TagProps {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  /** Selected (filled green-soft) state. @default false */
  selected?: boolean;
  /** Show a trailing remove "×". @default false */
  removable?: boolean;
  onRemove?: () => void;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

/** Pill chip for filters and amenities. Selectable and/or removable. */
export function Tag(props: TagProps): JSX.Element;
