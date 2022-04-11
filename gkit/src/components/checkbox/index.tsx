import './style.less';
import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

export type CheckboxProps = PropsWithChildren<{
  disabled?: boolean;
  hover?: boolean;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
  idQa?: string;
}>;

export function Checkbox({ children, hover, disabled, checked, idQa, onChange, className }: CheckboxProps) {
  return (
    <label className={classNames('gkit-checkbox', className)}>
      <input
        type="checkbox"
        id-qa={idQa}
        className={classNames({ hover })}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
      />
      {children && <span className="checkbox-span">{children}</span>}
    </label>
  );
}
