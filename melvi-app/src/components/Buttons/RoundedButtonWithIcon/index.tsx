import React from 'react';

import { GREEN_SEA, CLOUDS } from '../../../constants/colors';

import Icon from 'react-native-vector-icons/FontAwesome5';

import { Button, ButtonProps } from 'react-native-elements';

interface RoundedButtonWithIconProps extends ButtonProps {
  iconName: string;
  bgColor?: string;
  size: number;
}

/**
 * A rounded button with a icon based in the React Native Elements Button
 *
 * @param iconName An optional icon to the button
 * @param bgColor Background color to the button
 * @param size Button size
 */
const RoundedButtonWithIcon: React.FC<RoundedButtonWithIconProps> = ({
  iconName,
  bgColor,
  size,
}) => {
  return (
    <Button
      buttonStyle={{
        backgroundColor: bgColor || GREEN_SEA,
        width: size,
        height: size,
        borderRadius: size,
      }}
      iconRight={true}
      icon={<Icon name={iconName} size={size / 2} color={CLOUDS} />}
    />
  );
};

export default RoundedButtonWithIcon;
