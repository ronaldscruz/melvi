import React from 'react';

import { GREEN_SEA, CLOUDS } from '../../constants/colors';

import Icon from 'react-native-vector-icons/FontAwesome5';
import { Button, ButtonProps } from 'react-native-elements';

interface SubmitButtonProps extends ButtonProps {
  iconName?: string;
  gapTop?: boolean;
  fulfill?: boolean;
  bgColor?: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = props => {
  return (
    <Button
      buttonStyle={{
        backgroundColor: props.bgColor || GREEN_SEA,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      containerStyle={{
        marginTop: props.gapTop ? 42 : 0,
        width: props.fulfill ? '100%' : null,
      }}
      titleStyle={{ marginRight: 12 }}
      iconRight={true}
      icon={<Icon name={props.iconName} size={15} color={CLOUDS} />}
      {...props}
    />
  );
};

export default SubmitButton;
