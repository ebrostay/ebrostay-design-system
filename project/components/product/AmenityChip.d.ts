import React from 'react';

export interface AmenityChipProps {
  /** Icon node, e.g. <i data-lucide="wifi" />. */
  icon?: React.ReactNode;
  label: React.ReactNode;
  style?: React.CSSProperties;
}

/** Amenity list item — soft green icon tile + label. */
export function AmenityChip(props: AmenityChipProps): JSX.Element;
