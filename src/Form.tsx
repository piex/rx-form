import React, { FC, useCallback, useEffect } from 'react';
import { formCtx, Context } from './context';

export interface IFormProps<T = object> {
  initialValue: T;
  onChange?: (v: T) => void;
}

export const Form: FC<IFormProps> = ({ initialValue = {}, onChange, children }) => {
  const subject$ = new Context<any>(initialValue);
  const { Provider } = formCtx;

  useEffect(() => {
    subject$.values().subscribe(values => {
      onChange && onChange(values);
    });
  }, [subject$, onChange])

  const handleSubmit = useCallback((e) => {
    console.log(subject$.values().value)
    e.preventDefault();
  }, [subject$])

  return (
    <Provider value={subject$}>
      <form onSubmit={handleSubmit}>
        {children}
      </form>
    </Provider>
  );
};
