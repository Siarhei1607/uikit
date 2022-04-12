import classNames from 'classnames';
import React from 'react';
import { SvgIcon, SvgIconProps } from './svgIcon';

export function ChevronIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return (
    <SvgIcon className={classNames('icon-chevron', className)} viewBox="0 0 16 9" {...props}>
      <path
        d="M0.21967 0.46967C0.512563 0.176777 0.987437 0.176777 1.28033 0.46967L8 7.18934L14.7197 0.46967C15.0126 0.176777 15.4874 0.176777 15.7803 0.46967C16.0732 0.762563 16.0732 1.23744 15.7803 1.53033L8.53033 8.78033C8.23744 9.07322 7.76256 9.07322 7.46967 8.78033L0.21967 1.53033C-0.0732233 1.23744 -0.0732233 0.762563 0.21967 0.46967Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
