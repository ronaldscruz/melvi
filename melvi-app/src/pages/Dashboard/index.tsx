import React from 'react';
import { DashboardNavigation } from '../../types/App';

import { useApolloClient, useQuery } from 'react-apollo';

import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity, AsyncStorage, Text } from 'react-native';

import AppHeader from '../../components/Display/AppHeader';
import { ME } from '../../graphql/queries/User';
import { CLOUDS } from '../../constants/colors';

type DashboardProps = {
  navigation: DashboardNavigation;
};

/**
 * First "authenticated" app screen
 */
const Dashboard: React.FC<DashboardProps> = props => {
  const client = useApolloClient();

  const { loading: meLoading, error: meError, data } = useQuery(ME);

  return (
    <SafeAreaView>
      <AppHeader pageTitle="Dashboard" openMenuAction={props.navigation.openDrawer} />

      <Text style={{ color: CLOUDS, fontSize: 16, padding: 14 }}>
        {data?.me?.fullName ? 'Welcome, ' + data.me.fullName : ''}
      </Text>

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
