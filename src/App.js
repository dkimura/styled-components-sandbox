// @flow
import React from 'react';
import Button from './atoms/Button';

const App = () => (
  <div>
    <Button>Hello Button</Button>
    <Button color="red" hasShadow>Hello Button</Button>
    <Button color="blue">Hello Button</Button>
  </div>
);

export default App;
