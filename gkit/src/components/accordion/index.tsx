import './style.less';
import React from 'react';

type Props = {
  className?: string;
  label?: string;
  status?: string;
  children?: React.PropsWithChildren<any>;
  completedProjects?: string;
  controlProject?: string;
  countProject?: number;
  countCompleted?: string;
  icon?: boolean;
};

export function AccordionDetails({ children }: Props) {
  return <details className="gkit-accordion">{children}</details>;
}

export function AccordionSummary({ children }: Props) {
  return <summary>{children}</summary>;
}

export function AccordionIcon() {
  return (
    <svg
      className="icon-check"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.2221 15.4721C29.4726 15.2128 29.6112 14.8655 29.6081 14.5049C29.6049 14.1444 29.4603 13.7996 29.2054 13.5446C28.9504 13.2897 28.6056 13.1451 28.2451 13.1419C27.8845 13.1388 27.5372 13.2774 27.2779 13.5279L17.9375 22.8682L13.4096 18.3404C13.1503 18.0899 12.803 17.9513 12.4424 17.9544C12.0819 17.9576 11.7371 18.1022 11.4821 18.3571C11.2272 18.6121 11.0826 18.9569 11.0794 19.3174C11.0763 19.678 11.2149 20.0253 11.4654 20.2846L16.9654 25.7846C17.2232 26.0424 17.5729 26.1872 17.9375 26.1872C18.3021 26.1872 18.6518 26.0424 18.9096 25.7846L29.2221 15.4721ZM20 0.75C9.3685 0.75 0.75 9.3685 0.75 20C0.75 30.6315 9.3685 39.25 20 39.25C30.6315 39.25 39.25 30.6315 39.25 20C39.25 9.3685 30.6315 0.75 20 0.75ZM3.5 20C3.5 10.8879 10.8879 3.5 20 3.5C29.1121 3.5 36.5 10.8879 36.5 20C36.5 29.1121 29.1121 36.5 20 36.5C10.8879 36.5 3.5 29.1121 3.5 20Z"
        fill="#10B981"
      />
    </svg>
  );
}

export function AccordionTitle({ status, icon, children }: Props) {
  const divStyle = {
    fontSize: `${icon ? '1rem' : '1.25rem'}`,
  };
  return (
    <div style={divStyle}>
      {children}
      <p>{status}</p>
    </div>
  );
}

export function AccordionText({ children }: Props) {
  return <p className="text">{children}</p>;
}

export function AccordionChevron() {
  return (
    <svg
      className="icon-chevron"
      width="16"
      height="9"
      viewBox="0 0 16 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.21967 0.46967C0.512563 0.176777 0.987437 0.176777 1.28033 0.46967L8 7.18934L14.7197 0.46967C15.0126 0.176777 15.4874 0.176777 15.7803 0.46967C16.0732 0.762563 16.0732 1.23744 15.7803 1.53033L8.53033 8.78033C8.23744 9.07322 7.76256 9.07322 7.46967 8.78033L0.21967 1.53033C-0.0732233 1.23744 -0.0732233 0.762563 0.21967 0.46967Z"
        fill="#1F2737"
      />
    </svg>
  );
}

export function AccordionLabelProjects({ children }: Props) {
  return <label>{children}</label>;
}

export function AccordionProjects({ children, countProject }: Props) {
  return (
    <p>
      {children}: <span>{countProject}</span>
    </p>
  );
}
