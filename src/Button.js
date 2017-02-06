// @flow
import React from 'react';
import styled from 'styled-components';

type Props = {
  red?: boolean,
  blue?: boolean,
  children: ?any
}

const Button = styled.button`
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 12px;
  padding: 10px 30px;
  border-radius: 5px;
  border: 1px solid rgba(0,0,0,0.3);
  border-bottom-width: 3px;
  ${(props) => {
    if (props.blue) {
      return `
        color: #fff;
        background-color: #699DB6;
      `;
    }
    if (props.red) {
      return `
        background-color: #E48681;
        color: #fff;
      `;
    }
    return `
      background-color: #eee;
      color: #666;
    `;
  }}

  &:hover {
    ${(props) => {
      if (props.blue) {
        return 'background-color: #4F87A2;';
      }

      if (props.red) {
        return 'background-color: #DA4F49;';
      }

      return 'background-color: #e3e3e3;';
    }}
    border-color: rgba(0,0,0,0.5);
  }

  &:active {
    ${(props) => {
      if (props.blue) {
        return 'background-color: #3C677B;';
      }
      if (props.red) {
        return 'background-color: #B32C24;';
      }
      return 'background-color: #ccc;';
    }}
    border-color: rgba(0,0,0,0.9);
  }
`;

export default ({ red, blue, children }: Props) =>
  <Button
    red={red}
    blue={blue}
  >{children}</Button>;
