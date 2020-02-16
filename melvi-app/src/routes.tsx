import React from 'react';

// App colors
import {
  MIDNIGHT_BLUE,
  GREEN_SEA,
  WET_ASPHALT,
  WET_ASPHALT_DARK,
  CLOUDS,
} from './constants/colors';

// Apollo
import { useQuery } from '@apollo/react-hooks';

// Queries
import { VERIFY_AUTH_TOKEN } from './graphql/queries/User';

// Navigators
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Components
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Pages rendered in navigators
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';

/**
 * Custom navigation theme
 */
const MelviTheme = {
  dark: true,
  colors: {
    primary: GREEN_SEA,
    background: MIDNIGHT_BLUE,
    card: WET_ASPHALT,
    text: CLOUDS,
    border: WET_ASPHALT_DARK,
  },
};

const AppDrawer = createDrawerNavigator();
const AuthStack = createStackNavigator();

/**
 * The router with app stuff (Dashboard, Roadmaps, Profile, etc.)
 */
const App: React.FC = () => (
  <AppDrawer.Navigator initialRouteName="Dashboard">
    <AppDrawer.Screen name="Dashboard" component={Dashboard} />
  </AppDrawer.Navigator>
);

/**
 * Auth screen routes
 */
const Auth: React.FC = () => (
  <AuthStack.Navigator initialRouteName="SignIn">
    <AuthStack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
  </AuthStack.Navigator>
);

/**
 * Routes container with app theme
 */
const Routes: React.FC = () => {
  const { data } = useQuery(VERIFY_AUTH_TOKEN);

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={MelviTheme}>
        {data?.token ? <App /> : <Auth />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Routes;
