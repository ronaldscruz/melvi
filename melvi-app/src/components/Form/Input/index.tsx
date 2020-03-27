import React, { useState } from 'react';

// Styles
import {
  InputWrapper,
  CustomInput,
  IconLeft,
  PasswordIconWrapper,
  PasswordIcon,
} from './styled';

// RN components
import { TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
  width?: number;
  bgColor?: string;
  rounded?: boolean;
  iconLeft?: string;
  password?: boolean;
}

/**
 * An default text input
 * @param width Optional width
 * @param bgColor Background color hexcode
 * @param iconLeft An optional icon on the left side of the input
 * @param rounded If the input will have rounded borders
 * @param password Is this field a password?
 */
const Input: React.FC<InputProps> = props => {
  const [secure, setSecure] = useState(props.secureTextEntry);

  return (
    <InputWrapper width={props.width} bgColor={props.bgColor} rounded={props.rounded}>
      {props.iconLeft && <IconLeft name={props.iconLeft} />}

      <CustomInput {...props} secureTextEntry={secure} />

      {props.password && (
        <PasswordIconWrapper onPress={(): void => setSecure(!secure)}>
          <PasswordIcon name={secure ? 'eye' : 'eye-slash'} />
        </PasswordIconWrapper>
      )}
    </InputWrapper>
  );
};

export default Input;
