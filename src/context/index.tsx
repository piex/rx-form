import { createContext } from 'react';

export { default as useField } from './useField'

export { Context };
export const formCtx = createContext<Context<any>>(null as any);

import Context from './context'