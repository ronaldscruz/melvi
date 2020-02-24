import React from 'react';

import { GREEN_SEA, GREEN_SEA_DARK, CLOUDS } from '../../../constants/colors';

import Icon from 'react-native-vector-icons/FontAwesome5';

import { Button, ButtonProps } from 'react-native-elements';

interface DefaultButtonProps extends ButtonProps {
  iconName?: string;
  gapTop?: boolean;
  fulfill?: boolean;
  bgColor?: string;
  disabledBgColor?: string;
}

/**
 * A button based in the React Native Elements Button
 *
 * @param iconName An optional icon to the button
 * @param gapTop Add a gap from top?
 * @param fulfill Should the button fill the entire available space? (similar to "btn-block" class from Bootstrap)
 * @param bgColor Background color to the button
 * @param disabledBgColor Color for the button when it gets disabled
 */
const DefaultButton: React.FC<DefaultButtonProps> = props => {
  return (
    <Button
      buttonStyle={{
        backgroundColor: props.bgColor || GREEN_SEA,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      containerStyle={{
        marginTop: props.gapTop ? 42 : 0,
        width: props.fulfill ? '100%' : 160,
      }}
      disabledStyle={{
        backgroundColor: props.disabledBgColor || GREEN_SEA_DARK,
      }}
      titleStyle={{ marginRight: 12 }}
      iconRight={true}
      icon={<Icon name={props.iconName} size={15} color={CLOUDS} />}
      {...props}
    />
  );
};

export default DefaultButton;
