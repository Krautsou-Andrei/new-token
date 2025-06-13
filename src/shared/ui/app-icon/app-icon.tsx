import { type SVGProps, forwardRef } from 'react';

import { DEFAULT } from '@/shared/consts';

import type { IconName } from './types';

export interface IconProps
  extends Omit<SVGProps<SVGSVGElement>, 'name' | 'type'> {
  name: IconName;
}

export const AppIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ name, viewBox, ...props }, ref) => {
    const [spriteName, iconName] = name.split('/');

    return (
      <svg
        ref={ref}
        aria-hidden
        className="icon"
        focusable="false"
        width={DEFAULT.WIDHT_ICON}
        height={DEFAULT.HEIGHT_ICON}
        viewBox={viewBox}
        {...props}
      >
        <use xlinkHref={`/sprite/${spriteName}.svg#${iconName}`} />
      </svg>
    );
  }
);
