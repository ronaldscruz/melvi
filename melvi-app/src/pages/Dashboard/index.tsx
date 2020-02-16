import React from 'react';
import { DashboardNavigation } from '../../types/App';

import { useApolloClient } from 'react-apollo';

import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity, AsyncStorage, Text, StatusBar } from 'react-native';

import { MIDNIGHT_BLUE } from '../../constants/colors';

import AppHeader from '../../components/AppHeader';

type DashboardProps = {
  navigation: DashboardNavigation;
};

/**
 * First "authenticated" app screen
 */
const Dashboard: React.FC<DashboardProps> = props => {
  const client = useApolloClient();

  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor={MIDNIGHT_BLUE} />
      <AppHeader pageTitle="Dashboard" openMenuAction={props.navigation.openDrawer} />
      <TouchableOpacity
        onPress={async (): Promise<boolean> => {
          try {
            await Promise.all([AsyncStorage.removeItem('token'), client.resetStore()]);
            return true;
          } catch (err) {
            console.error('Failed clearing token:', err);
            return false;
          }
        }}
      >
        <Text> click here to logout </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Dashboard;
