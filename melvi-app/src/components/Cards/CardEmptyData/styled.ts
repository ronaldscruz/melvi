import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { MIDNIGHT_BLUE, CLOUDS, WET_ASPHALT, CONCRETE } from '../../../constants/colors';

export const Card = styled.View`
  align-items: center;
  justify-content: center;
  min-height: 198px;
  border-radius: 8px;
  background-color: ${(props): string => (props.dark ? MIDNIGHT_BLUE : CLOUDS)};
`;

export const AlertWrapper = styled.View`
  justify-content: center;
  align-items: center;
`;

export const AlertIcon = styled(Icon)`
  color: ${(props): string => (props.dark ? WET_ASPHALT : CONCRETE)};
  font-size: 32px;
  margin-bottom: 18px;
`;

export const ActionButtonWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
`;
