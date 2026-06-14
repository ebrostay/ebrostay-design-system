import React from 'react';

/**
 * Hero search pill props.
 * @startingPoint section="Product" subtitle="Glassy hero search pill" viewport="920x130"
 */
export interface SearchBarProps {
  where?: string;
  checkIn?: string;
  checkOut?: string;
  guests?: string;
  /** Called with the segment key clicked: 'where' | 'checkIn' | 'checkOut' | 'guests'. */
  onSegment?: (key: 'where' | 'checkIn' | 'checkOut' | 'guests') => void;
  onSearch?: () => void;
  /** Collapse to Where / Dates / Guests + icon button (header use). @default false */
  compact?: boolean;
  style?: React.CSSProperties;
}

/**
 * Hero search pill — Where / Check-in / Check-out / Guests segments with a green
 * search button. Glassy translucent surface; sits over the hero photo.
 *
 * @startingPoint section="Product" subtitle="Glassy hero search pill" viewport="900x120"
 */
export function SearchBar(props: SearchBarProps): JSX.Element;
