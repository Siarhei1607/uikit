import './style.less';
import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

type Sizes = 'small' | 'large';

export type InputTextProps = PropsWithChildren<{
  size?: Sizes;
  maxlength?: number;
  value?: string | number;
  name?: string;
  multiple?: boolean;
  onChange?: (e: React.ChangeEvent<{}>) => void;
  required?: boolean;
  label?: string;
  description?: string;
  hover?: boolean;
  active?: boolean;
  focus?: boolean;
  filled?: boolean;
  error?: boolean;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
  idQa?: string;
  dataList?: string[];
}>;

export function ContainerInput({ children, size = 'large', label, description, className, idQa }: InputTextProps) {
  return (
    <div id-qa={idQa} className={classNames('gkit-input-container', className)}>
      {label && (
        <label htmlFor={`${label}${size}`} className={classNames('input-label', size)}>
          {label}
        </label>
      )}
      {children}
      {description && <label className="input-description">{description}</label>}
    </div>
  );
}

export function InputText({
  size = 'large',
  value,
  name,
  onChange,
  required,
  label,
  hover,
  focus,
  filled,
  error,
  disabled,
  placeholder,
  className,
}: InputTextProps) {
  return (
    <input
      id={`${label}${size}`}
      type="text"
      {...{ placeholder, value, name, onChange, disabled, required }}
      className={classNames('input-text', className, size, {
        hover,
        focus,
        filled,
        error,
        disabled,
        placeholder,
      })}
    />
  );
}

export function Select({
  size = 'large',
  name,
  onChange,
  required,
  multiple,
  hover,
  focus,
  filled,
  error,
  disabled,
  dataList,
  className,
}: InputTextProps) {
  return (
    <select
      className={classNames('select', className, size, {
        hover,
        focus,
        filled,
        error,
        disabled,
      })}
      {...{ name, onChange, disabled, required, multiple }}
    >
      {dataList.map(item => {
        return (
          <option key={item} value={item}>
            {item}
          </option>
        );
      })}
    </select>
  );
}
