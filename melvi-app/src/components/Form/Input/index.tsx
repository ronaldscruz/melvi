import React from 'react';

// Styles
import { InputWrapper } from './styled';

// RN components
import { TextInput, TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
  width?: number;
  bgColor?: string;
  rounded?: boolean;
  iconLeft?: string;
  iconRight?: string;
}

/**
 * An default text input
 * @param width Optional width
 * @param bgColor Background color hexcode
 * @param iconLeft An optional icon on the left side of the input
 * @param iconRight An optional icon on the right side of the input
 * @param rounded If the input will have rounded borders
 */
const Input: React.FC<InputProps> = props => {
  return (
    <InputWrapper width="100%" bgColor={props?.bgColor} rounded={props?.rounded}>
      <TextInput />
    </InputWrapper>
  );
};

export default Input;
