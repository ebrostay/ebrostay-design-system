import React from 'react';

export interface RatingProps {
  /** 0–5. */
  value?: number;
  /** Review count shown in parentheses; omit to hide. */
  count?: number | null;
  /** Star pixel size. @default 16 */
  size?: number;
  /** Show the numeric value. @default true */
  showValue?: boolean;
  style?: React.CSSProperties;
}

export interface RatingInlineProps {
  value?: number;
  count?: number | null;
  size?: number;
  style?: React.CSSProperties;
}

/** Five-star rating with numeric value and review count. */
export function Rating(props: RatingProps): JSX.Element;
/** Compact single-star rating for dense list rows. */
export function RatingInline(props: RatingInlineProps): JSX.Element;
