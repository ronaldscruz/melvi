import styled from 'styled-components/native';

// Colors
import { MIDNIGHT_BLUE, GREEN_SEA } from '../../../constants/colors';

// Lib components
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

export const ListItemWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
  border-radius: 6px;
  background-color: ${MIDNIGHT_BLUE};
`;

export const ContentWithoutArrow = styled.View`
  width: 95%;
  flex-direction: row;
  align-items: center;
`;

export const TouchableCardArea = styled(TouchableNativeFeedback)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 88px;
  padding: 0 18px;
`;

export const TitleAndDescription = styled.View`
  flex: 1;
  padding-left: 16px;
`;

export const CornerArrow = styled(Icon)`
  font-size: 16px;
  color: ${GREEN_SEA};
`;
