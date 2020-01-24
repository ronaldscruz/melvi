import styled from 'styled-components/native';
import { WHITE } from '../../constants/colors';

const StyledCenteredContentView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props): string => props.bgColor || WHITE};
`;

export default StyledCenteredContentView;
