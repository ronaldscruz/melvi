import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Dashboard from './pages/Dashboard';
import FulfillLoading from './pages/FulfillLoading';
import SignIn from './pages/SignIn';

const AppStack = createStackNavigator({
  Dashboard,
});

const AuthStack = createStackNavigator({
  SignIn,
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: FulfillLoading,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'Loading',
    },
  ),
);
