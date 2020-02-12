import React, { useState, useEffect } from 'react';

// App colors
import {
  MIDNIGHT_BLUE,
  GREEN_SEA,
  WET_ASPHALT,
  WET_ASPHALT_DARK,
  CLOUDS,
} from './constants/colors';

// Navigators
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Pages rendered in navigators
import Loading from './pages/Loading';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import { AsyncStorage } from 'react-native';
import FulfillLoading from './components/FulfillLoading';

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
 * This is the initial router. Loading route decides if it will navigate to SignIn screen or
 * to App router (Dashboard, Roadmaps, Profile, etc.)
 */
const Auth: React.FC = () => (
  <AuthStack.Navigator initialRouteName="Loading">
    <AuthStack.Screen
      name="Loading"
      component={Loading}
      options={{ headerShown: false }}
    />
    <AuthStack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
  </AuthStack.Navigator>
);

/**
 * Routes container with app theme
 */
const Routes: React.FC = () => {
  const [isAuthenticated, setAuthenticated] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem('token')
      .then(token => {
        if (token) setAuthenticated(true);
      })
      .catch(err => {
        console.error('Error authenticating:', err);
      });
  });

  const renderNavigatorBasedOnAuthState: void = () => {
    if (isAuthenticated === null) return <FulfillLoading />;
    if (isAuthenticated === true) return <App />;
    if (isAuthenticated === false) return <Auth />;
    return;
  };

  return (
    <NavigationContainer theme={MelviTheme}>
      {renderNavigatorBasedOnAuthState()}
    </NavigationContainer>
  );
};

export default Routes;
