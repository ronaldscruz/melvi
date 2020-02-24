import styled from 'styled-components/native';

import { Text } from '../../Text';

import { MIDNIGHT_BLUE, CLOUDS } from '../../../constants/colors';

export const Card = styled.View`
  min-height: 225px;
  border-radius: 8px;
  padding: 8px 12px;
  background-color: ${(props): string => (props.dark ? MIDNIGHT_BLUE : CLOUDS)};
`;

export const ListItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  height: 75px;
  padding: 8px;
`;

export const ItemText = styled(Text)`
  padding-left: 10px;
`;

export const ListButtonWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
`;
