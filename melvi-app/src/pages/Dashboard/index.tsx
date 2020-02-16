import React from 'react';
import { DashboardNavigation } from '../../types/App';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity, AsyncStorage, Text } from 'react-native';

import { useApolloClient } from 'react-apollo';

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
