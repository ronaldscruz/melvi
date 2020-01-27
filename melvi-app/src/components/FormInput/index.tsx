import React, { useState } from 'react';

import { ShowPassword } from './styled';
import { CLOUDS, ASBESTOS } from '../../constants/colors';

import Icon from 'react-native-vector-icons/FontAwesome5';
import { Input, InputProps } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface FormInputProps extends InputProps {
  iconName?: string;
  gapBottom?: boolean;
  password?: boolean;
}

const FormInput: React.FC<FormInputProps> = props => {
  const [secure, setSecure] = useState(true);

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
              <ShowPassword
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
