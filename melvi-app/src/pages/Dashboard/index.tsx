import React from 'react';
import { DashboardNavigation } from '../../types/App';

import { useApolloClient, useQuery } from 'react-apollo';

import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity, AsyncStorage, Text } from 'react-native';

import AppHeader from '../../components/AppHeader';
import { GET_USER } from '../../graphql/queries/User';

type DashboardProps = {
  navigation: DashboardNavigation;
};

/**
 * First "authenticated" app screen
 */
const Dashboard: React.FC<DashboardProps> = props => {
  const client = useApolloClient();

  const { loading, error, data } = useQuery(GET_USER, { variables: { userId: 5 } });

  console.log(error);

  console.log(data);

  return (
    <SafeAreaView>
      <AppHeader pageTitle="Dashboard" openMenuAction={props.navigation.openDrawer} />
      {/* <Text> Logged as: {user?.name} </Text> */}
      {/* <Text> Permission name: {user?.permission?.name} </Text> */}

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
