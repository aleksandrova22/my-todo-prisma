import { memo, ReactNode } from 'react';
import { Action } from '../todo';

export const Button = memo(function But({ action, children }: {action: Action, children: ReactNode}) {
  console.debug('Button render', children);
  return <button data-action={action} >{children}</button>
});