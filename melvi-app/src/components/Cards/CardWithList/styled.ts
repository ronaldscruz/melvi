import styled from 'styled-components/native';
import { Text } from '../../Text';
import { MIDNIGHT_BLUE, CLOUDS } from '../../../constants/colors';

export const Card = styled.View`
  border-radius: 8px;
  padding: 14px;
  background-color: ${(props): string => (props.dark ? MIDNIGHT_BLUE : CLOUDS)};
`;

export const ListItem = styled.View`
  padding: 8px;
`;

export const ItemText = styled(Text)``;
