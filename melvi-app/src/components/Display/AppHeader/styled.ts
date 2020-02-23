import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { MIDNIGHT_BLUE, CLOUDS } from '../../../constants/colors';

const headerHeight = '60px';

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  height: ${headerHeight};
  background-color: ${MIDNIGHT_BLUE};
`;

export const MenuButton = styled.TouchableOpacity`
  width: 52px;
  padding: 18px;
`;

export const MenuIcon = styled(Icon)`
  color: ${CLOUDS};
  font-size: 18px;
`;

export const Text = styled.Text`
  color: ${CLOUDS};
  font-size: 18px;
`;
