import styled from 'styled-components/native';

import { CLOUDS } from '../../constants/colors';

export const Title = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: ${CLOUDS};
  padding: 20px 0 10px 0;
`;

export const SubTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: ${CLOUDS};
  padding: 20px 0 10px 0;
`;

export const Text = styled.Text`
  font-size: 16px;
  font-weight: ${(props): string => (props.bold ? 'bold' : 'normal')};
  color: ${CLOUDS};
  padding: 4px 0;
`;
