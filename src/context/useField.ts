import {
  useState,
  useEffect,
  useContext,
  useCallback,
} from 'react';
import { formCtx } from './index';

const useField = (name: string) => {
  const ctx = useContext(formCtx);
  const [value, setValue] = useState(ctx.values().value[name]);

  useEffect(() => {
    const sub$$ = ctx.values(name).subscribe(value => {
      setValue(value);
    })

    return () => sub$$.unsubscribe();
  }, [ctx, name])

  const onChange = useCallback((v) => {
    ctx.patchValue({ [name]: v })
  }, [ctx, name]);

  return {
    value,
    onChange
  }
}

export default useField;
