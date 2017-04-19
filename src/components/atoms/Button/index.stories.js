import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Button from '.';

storiesOf('Button', module)
  .add('defaults', () => (
    <Button onClick={action('button clicked')}>Hello Button</Button>
  ))
  .add('colors', () => (
    <div>
      <Button onClick={action('default button clicked')}>Hello Button</Button>
      <Button color="red" onClick={action('red button clicked')}>Hello Button</Button>
      <Button color="blue" onClick={action('blue button clicked')}>Hello Button</Button>
    </div>
  ));
