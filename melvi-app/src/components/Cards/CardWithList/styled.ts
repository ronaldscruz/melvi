import styled from 'styled-components/native';

import { Text } from '../../Text';

import { MIDNIGHT_BLUE, CLOUDS } from '../../../constants/colors';

export const Card = styled.View`
  min-height: 198px;
  border-radius: 8px;
  padding: 6px 12px;
  background-color: ${(props): string => (props.dark ? MIDNIGHT_BLUE : CLOUDS)};
`;

export const ListItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  height: 62px;
  padding: 8px;
`;

export const ItemText = styled(Text)`
  color: ${(props): string => (props.dark ? CLOUDS : CLOUDS)};
  padding-left: 10px;
`;

export const ListButtonWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
`;
