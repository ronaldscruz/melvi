import React from 'react';

// Apollo
import { useQuery } from '@apollo/react-hooks';

// Queries
import { VERIFY_AUTH_TOKEN } from './graphql/queries/User';

// Navigators
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

// App theme
import DefaultTheme from './themes/default';

// Components
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Pages rendered in navigators
import SignIn from './pages/Auth/SignIn';
import Dashboard from './pages/App/Dashboard';
import Roadmaps from './pages/App/Roadmaps';
import FullscreenLoading from './components/Loadings/FullscreenLoading';

const AppDrawer = createDrawerNavigator();
const AuthStack = createStackNavigator();

/**
 * The router with app stuff (Dashboard, Roadmaps, Profile, etc.)
 */
const App: React.FC = () => (
  <AppDrawer.Navigator initialRouteName="Dashboard">
    <AppDrawer.Screen name="Dashboard" component={Dashboard} />
    <AppDrawer.Screen name="Roadmaps" component={Roadmaps} />
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
  const { loading, data } = useQuery(VERIFY_AUTH_TOKEN);

  if (loading) return <FullscreenLoading />;

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={DefaultTheme}>
        {data?.token ? <App /> : <Auth />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Routes;
