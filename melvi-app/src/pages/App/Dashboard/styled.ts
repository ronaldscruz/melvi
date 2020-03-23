import styled from 'styled-components/native';

// Colors
import { GREEN_SEA } from '../../../constants/colors';

// Components
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const DashboardWrapper = styled.View`
  padding: 26px 20px;
`;

export const TopContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UserGreeting = styled(SafeAreaView)`
  flex-direction: row;
  align-items: center;
  margin-bottom: 18px;
`;

export const Welcome = styled(SafeAreaView)`
  align-items: flex-start;
  margin-left: 14px;
`;

export const LogoutButton = styled.TouchableOpacity`
  width: 36px;
  height: 48px;
`;

export const LogoutButtonIcon = styled(Icon)`
  font-size: 32px;
  color: ${GREEN_SEA};
`;

export const RoadmapsTitleWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 18px 4px 12px;
`;
