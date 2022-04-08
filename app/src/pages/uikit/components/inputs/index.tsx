import './style.less';
import React, { Fragment } from 'react';
import { ContainerInput, InputText, Select, InputTextProps } from '@itgenio/gkit';

export function Inputs() {
  const sizes = ['small', 'large'];

  const renderState = (state: string, props: InputTextProps) => {
    return (
      <Fragment key={state}>
        <div>{state}</div>
        {sizes.map(size => {
          const p = { ...props, size };
          return (
            <ContainerInput key={`${state}${size}`} {...p}>
              <InputText {...p} />
            </ContainerInput>
          );
        })}
        {sizes.map(size => {
          const p = { ...props, size };
          return (
            <ContainerInput key={`${state}${size}`} {...p}>
              <Select {...p} onChange={e => console.log(e.target.value)}>
                {size} Desc
              </Select>
            </ContainerInput>
          );
        })}
      </Fragment>
    );
  };

  const states: [string, InputTextProps][] = [
    [
      'Normal',
      { placeholder: 'placeholder', label: 'Label1', description: 'Desc', dataList: ['Hello', 'World', 'Gavana'] },
    ],
    [
      'Hover',
      {
        hover: true,
        placeholder: 'placeholder',
        label: 'Label2',
        description: 'Desc',
        dataList: ['Hello', 'World', 'Gavana'],
      },
    ],
    [
      'Focused',
      {
        focus: true,
        placeholder: 'placeholder',
        label: 'Label3',
        description: 'Desc',
        dataList: ['Hello', 'World', 'Gavana'],
      },
    ],
    [
      'Filled',
      {
        filled: true,
        placeholder: 'placeholder',
        label: 'Label4',
        description: 'Desc',
        dataList: ['Hello', 'World', 'Gavana'],
      },
    ],
    [
      'Error',
      {
        error: true,
        placeholder: 'placeholder',
        label: 'Label5',
        description: 'Desc',
        dataList: ['Hello', 'World', 'Gavana'],
      },
    ],
    [
      'Disabled',
      { disabled: true, placeholder: 'placeholder', label: 'Label6', dataList: ['Hello', 'World', 'Gavana'] },
    ],
  ];

  return (
    <div className="inputs">
      <div className="grid">{states.map(([name, props]) => renderState(name, props))}</div>
    </div>
  );
}

Inputs.displayName = 'Inputs';
