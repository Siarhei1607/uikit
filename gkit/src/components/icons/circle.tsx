import classNames from 'classnames';
import React from 'react';
import { SvgIcon, SvgIconProps } from './svgIcon';

type CircleIcon = SvgIconProps & {
  normal?: boolean;
  hover?: boolean;
};

export function CircleIcon({ className, normal, hover, ...props }: CircleIcon) {
  return (
    <SvgIcon className={classNames('switcher-icon', className, { normal, hover })} viewBox="0 0 20 20" {...props}>
      <path
        d="M10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3ZM2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
