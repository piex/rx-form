import React, {
  ComponentType,
  FC,
} from 'react';
import { useField } from 'rx-form'

export interface IFieldComponentProps {
  value: any;
  onChange: (v: any) => void;
}

export interface IFIeldProps {
  name: string;
  label: string;
  component: ComponentType<IFieldComponentProps>;
}

const Field: FC<IFIeldProps> = ({ name, label, component: Comp }) => {
  const { value, onChange } = useField(name)

  return (
    <section>
      <span>{label}</span>
      {<Comp value={value} onChange={onChange} />}
    </section>
  )
}

export default Field;
