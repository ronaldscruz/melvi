import styled from 'styled-components/native';

import { CLOUDS, SILVER } from '../../constants/colors';

export const Title = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: ${CLOUDS};
`;

export const SubTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: ${CLOUDS};
`;

export const Text = styled.Text`
  font-size: 16px;
  font-weight: ${(props): string => (props.bold ? 'bold' : 'normal')};
  color: ${CLOUDS};
  margin: 1px ${(props): string => (props.bold ? '4px' : '0')};
`;

export const MutedText = styled.Text`
  font-size: 12px;
  font-weight: ${(props): string => (props.bold ? 'bold' : 'normal')};
  color: ${SILVER};
  margin: 1px ${(props): string => (props.bold ? '4px' : '0')};
`;
