import React, { FC, useCallback, ChangeEventHandler } from 'react';
import { IFieldComponentProps } from '../Field'

const Input: FC<IFieldComponentProps> = ({ value, onChange }) => {

  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback((evt) => {
    onChange(evt.target.value);
  }, [onChange]);

  return (
    <input value={value} onChange={handleChange} />
  );
};

export default Input;
