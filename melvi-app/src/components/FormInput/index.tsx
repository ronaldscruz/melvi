import React, { useState } from 'react';

import { ShowPasswordIcon } from './styled';
import { CLOUDS, ASBESTOS } from '../../constants/colors';

import Icon from 'react-native-vector-icons/FontAwesome5';
import { Input, InputProps } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface FormInputProps extends InputProps {
  iconName?: string;
  gapBottom?: boolean;
  password?: boolean;
}

/**
 * Default form input
 *
 * @param iconName An icon added to the left of the input
 * @param gapBottom Add a gap from bottom?
 * @param password Is the input a password?
 */
const FormInput: React.FC<FormInputProps> = props => {
  const [secure, setSecure] = useState(true);

  /**
   * Secure field with "view password" feature
   */
  function renderSecure(): React.ReactElement {
    return (
      <Input
        secureTextEntry={secure}
        containerStyle={{ marginBottom: props.gapBottom ? 24 : 0 }}
        inputStyle={{ color: CLOUDS, fontSize: 15 }}
        placeholderTextColor={ASBESTOS}
        leftIcon={<Icon name={props.iconName} color={CLOUDS} size={15} />}
        leftIconContainerStyle={{ paddingRight: 14 }}
        rightIcon={
          props.password && (
            <TouchableOpacity>
              <ShowPasswordIcon
                name={secure ? 'eye' : 'eye-slash'}
                color={CLOUDS}
                size={16}
                onPress={(): void => setSecure(!secure)}
              />
            </TouchableOpacity>
          )
        }
        {...props}
      />
    );
  }

  /**
   * If password prop is true, render the secure input, else render a default input
   */
  return props.password ? (
    renderSecure()
  ) : (
    <Input
      containerStyle={{ marginBottom: props.gapBottom ? 24 : 0 }}
      inputStyle={{ color: CLOUDS, fontSize: 15 }}
      placeholderTextColor={ASBESTOS}
      leftIcon={<Icon name={props.iconName} color={CLOUDS} size={15} />}
      leftIconContainerStyle={{ paddingRight: 14 }}
      {...props}
    />
  );
};

export default FormInput;
