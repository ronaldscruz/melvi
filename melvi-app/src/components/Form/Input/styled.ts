import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/FontAwesome5';

import { WET_ASPHALT, CLOUDS } from '../../../constants/colors';

export const InputWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 8px 14px;
  margin-bottom: 16px;
  width: ${(props): string => props.width || '100%'};
  height: 44px;
  background-color: ${(props): string => props.bgColor || WET_ASPHALT};
  border-radius: ${(props): string => (props.rounded ? '48px' : '4px')};
`;

export const IconLeft = styled(Icon)`
  color: ${CLOUDS};
  font-size: 16px;
  width: 30px;
`;

export const CustomInput = styled.TextInput`
  color: ${CLOUDS};
  font-size: 16px;
  flex: 1;
`;

export const PasswordIconWrapper = styled.TouchableOpacity`
  align-items: center;
  margin-left: 4px;
  width: 30px;
`;

export const PasswordIcon = styled(Icon)`
  color: ${CLOUDS};
  font-size: 18px;
`;
