import styled from 'styled-components/native';

import { WET_ASPHALT } from '../../../constants/colors';

export const InputWrapper = styled.View`
  padding: 8px 14px;

  width: ${(props): string => (props.width ? '100%' : '186px')};
  height: 40px;
  background-color: ${(props): string => props.bgColor || WET_ASPHALT};
  border-radius: ${(props): string => (props.rounded ? '40px' : '6px')};
`;
