// @flow
import React from 'react';
import styled from 'styled-components';

type Props = {
  primary?: boolean,
  secondary?: boolean,
  tertiary?: boolean,
  disabled?: boolean,
  children: ?any
}


const StyledButton = styled.button`
  display: inline-flex;
  padding: 10px 30px;
  background-color:;
  color:;

  &:hover {
    background-color:;
    border-color: rgba(0, 0, 0, 0.5);
  }

  &:active {
    background-color:;
    border-color: rgba(0, 0, 0, 0.9);
  }
`;

const Button = (props: Props) =>
  <StyledButton {...props} />;

Button.defaultProps = {
  type: 'button',
  color: '',
  disabled: false,
};

export default Button;
