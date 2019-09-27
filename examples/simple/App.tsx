import React, { FC } from 'react';

import { Form } from 'rx-form';
import Field from './Field'
import Input from './Input';

const App: FC = () => {
  return (
    <Form initialValue={{ name: 'zz', age: 18 }}>
      <Field name='name' label="姓名" component={Input} />
      <br />
      <br />
      <Field name='age' label="年龄" component={Input} />
      <br />
      <br />
      <button type="submit">确定</button>
    </Form>
  );
};

export default App;
