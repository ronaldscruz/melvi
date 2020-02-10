import React, { useEffect } from 'react';
import { DashboardNavigation } from '../../types/App';

import { View, AsyncStorage } from 'react-native';

type DashboardProps = {
  navigation: DashboardNavigation;
};

const Dashboard: React.FC<DashboardProps> = props => {
  useEffect(() => {
    setTimeout(async () => {
      await AsyncStorage.clear();
      props.navigation.navigate('SignIn');
    }, 8000);
  });

  return <View></View>;
};

export default Dashboard;
