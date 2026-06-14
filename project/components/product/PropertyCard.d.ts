import React from 'react';

/**
 * Signature listing card props.
 * @startingPoint section="Product" subtitle="Listing card with photo, rating & price" viewport="340x380"
 */
export interface PropertyCardProps {
  /** Photo URL. Falls back to a brand gradient. */
  image?: string;
  title: string;
  /** Neighbourhood / area line. */
  location?: string;
  price: number | string;
  /** @default "€" */
  currency?: string;
  /** @default "night" */
  period?: string;
  /** Numeric rating shown next to a star, e.g. 4.92. */
  rating?: number | string;
  reviews?: number;
  /** Corner ribbon text, e.g. "Superhost", "New". */
  badge?: string;
  /** @default "brand" */
  badgeTone?: 'brand' | 'accent' | 'glass';
  favorite?: boolean;
  onFavorite?: (favorite: boolean) => void;
  /** Small green note line, e.g. "Free cancellation". */
  note?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

/**
 * Signature listing card — photo with favorite heart and optional badge, title,
 * neighbourhood, inline star rating, and price per night. The building block of
 * search results and home grids.
 *
 * @startingPoint section="Product" subtitle="Listing card with photo, rating & price" viewport="320x360"
 */
export function PropertyCard(props: PropertyCardProps): JSX.Element;
