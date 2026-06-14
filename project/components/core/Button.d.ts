import React from 'react';

/**
 * Props for the primary action button.
 * @startingPoint section="Core" subtitle="Action button with variants & icons" viewport="460x140"
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /** Visual style. @default "primary" */
  variant?: 'primary' | 'accent' | 'secondary' | 'subtle' | 'ghost';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Icon node rendered before the label (e.g. a Lucide <i>). */
  icon?: React.ReactNode;
  /** Icon node rendered after the label. */
  iconRight?: React.ReactNode;
  /** Stretch to container width. @default false */
  fullWidth?: boolean;
  /** Show a spinner and disable. @default false */
  loading?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

/**
 * Primary action button for Ebrostay. Soft 10px corners, warm hover shadow on the
 * green primary. Use `primary` for the main CTA, `accent` (terracotta) sparingly for
 * standout moments, `secondary`/`ghost` for lower emphasis.
 *
 * @startingPoint section="Core" subtitle="Action button with variants & icons" viewport="420x120"
 */
export function Button(props: ButtonProps): JSX.Element;
