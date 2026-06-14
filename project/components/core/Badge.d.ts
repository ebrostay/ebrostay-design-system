import React from 'react';

export interface BadgeProps {
  children?: React.ReactNode;
  /** @default "neutral" */
  tone?: 'brand' | 'accent' | 'neutral' | 'success' | 'warning' | 'danger' | 'info';
  /** Solid fill instead of soft tint. @default false */
  solid?: boolean;
  /** Leading status dot. @default false */
  dot?: boolean;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Small pill for statuses and labels: "Superhost", "New", "3 left", booking states. */
export function Badge(props: BadgeProps): JSX.Element;
