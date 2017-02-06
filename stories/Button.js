import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Button from '../src/Button';

storiesOf('Button', module)
  .add('with text', () => (
    <div>
      <Button onClick={action('clicked')}>Hello Button</Button>
      <Button red onClick={action('clicked')}>Hello Button</Button>
      <Button blue onClick={action('clicked')}>Hello Button</Button>
    </div>
  ))
  .add('with some emoji', () => (
    <div>
      <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
      <Button red onClick={action('clicked')}>😀 😎 👍 💯</Button>
      <Button blue onClick={action('clicked')}>😀 😎 👍 💯</Button>
    </div>
  ));
