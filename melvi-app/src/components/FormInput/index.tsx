import React from 'react';

import { CLOUDS, ASBESTOS } from '../../constants/colors';

import Icon from 'react-native-vector-icons/FontAwesome5';
import { Input, InputProps } from 'react-native-elements';

interface FormInputProps extends InputProps {
  iconName?: string;
  gapBottom?: boolean;
}

const FormInput: React.FC<FormInputProps> = props => {
  return (
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
