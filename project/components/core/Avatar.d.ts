import React from 'react';

export interface AvatarProps {
  /** Image URL. Falls back to initials from `name`. */
  src?: string;
  /** Used for initials and alt text. */
  name?: string;
  /** @default "md" */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Status dot. */
  status?: 'online' | 'offline' | null;
  /** Brand ring around the avatar. @default false */
  ring?: boolean;
  style?: React.CSSProperties;
}

/** Round user/host avatar with image-or-initials fallback. */
export function Avatar(props: AvatarProps): JSX.Element;
