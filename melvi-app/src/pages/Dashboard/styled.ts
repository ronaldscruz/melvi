import styled from 'styled-components/native';

import { SafeAreaView } from 'react-native-safe-area-context';

export const DashboardWrapper = styled.View`
  padding: 26px 20px;
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
