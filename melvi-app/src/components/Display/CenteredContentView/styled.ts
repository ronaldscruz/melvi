import styled from 'styled-components/native';
import { CLOUDS } from '../../../constants/colors';

const StyledCenteredContentView = styled.View`
  padding: 12px 24px;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props): string => props.bgColor || CLOUDS};
`;

export default StyledCenteredContentView;
