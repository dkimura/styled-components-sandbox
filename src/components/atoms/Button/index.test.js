// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { matcher, serializer } from 'jest-styled-components';
import Button from '.';

expect.extend(matcher);
expect.addSnapshotSerializer(serializer);

const wrap = (props = {}) => shallow(<Button {...props} />).dive();
const elm = (props = {}) => renderer.create(<Button {...props} />);

describe('enzyme', () => {
  it('renders with different combination of props', () => {
    wrap({ disabled: true });
    wrap({ transparent: true });
    wrap({ disabled: true, transparent: true });
  });

  it('renders children when passed in', () => {
    const wrapper = wrap({ children: 'test' });
    expect(wrapper.contains('test')).toBe(true);
  });

  it('renders props when passed in', () => {
    const wrapper = wrap({ type: 'submit' });
    expect(wrapper.find({ type: 'submit' })).toHaveLength(1);
  });

  it('renders button tag by default', () => {
    const wrapper = wrap();
    expect(wrapper.find('button')).toHaveLength(1);
  });
});

describe('styled-components', () => {
  it('render default button', () => {
    expect(elm({ children: 'default button' })).toMatchStyledComponentsSnapshot();
  });

  it('render color button', () => {
    expect(elm({ color: 'red', children: 'red button' })).toMatchStyledComponentsSnapshot();
    expect(elm({ color: 'blue', children: 'blue button' })).toMatchStyledComponentsSnapshot();
  });
});
