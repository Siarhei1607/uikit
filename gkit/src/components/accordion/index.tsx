import './style.less';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import classNames from 'classnames';
import React, { PropsWithChildren, ReactNode } from 'react';
import { ChevronDownIcon } from '../icons';

type AccordionProps = PropsWithChildren<{
  idQa?: string;
  idQaSummary?: string;
  className?: string;
  content: ReactNode;
}>;

export function Accordion({ children, idQa, idQaSummary, className, content }: AccordionProps) {
  return (
    <AccordionPrimitive.Root id-qa={idQa} type="multiple" className="gkit-accordion">
      <AccordionPrimitive.Item value="1" className="accordion-item">
        <AccordionPrimitive.Trigger className="accordion-trigger" id-qa={idQaSummary}>
          <div className="accordion-panel">
            <div className="accordion-panel-body">{children}</div>

            <ChevronDownIcon id-qa="chevron-icon" />
          </div>
        </AccordionPrimitive.Trigger>

        <AccordionPrimitive.Content className="content-container">
          <div className={classNames('content', className)} id-qa="content">
            {content}
          </div>
        </AccordionPrimitive.Content>
      </AccordionPrimitive.Item>
    </AccordionPrimitive.Root>
  );
}

export type AccordionTitleProps = PropsWithChildren<{
  idQa?: string;
  className?: string;
  status?: string;
  icon?: boolean;
}>;

export function AccordionTitle({ status, icon, children, className, idQa }: AccordionTitleProps) {
  return (
    <div id-qa={idQa} className={classNames('accordion-title', className, { icon })}>
      {children}
      {status && <p>{status}</p>}
    </div>
  );
}
