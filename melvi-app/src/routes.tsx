import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Dashboard from './pages/Dashboard';
import Loading from './pages/Loading';
import SignIn from './pages/SignIn';

const App = createDrawerNavigator();
const Auth = createStackNavigator();

// const Auth = createStackNavigator({
//   SignIn: {
//     screen: SignIn,
//     navigationOptions: {
//       headerShown: false,
//     },
//   },
// });

// export default createAppContainer(
//   createSwitchNavigator(
//     {
//       Loading,
//       App: AppStack,
//       Auth: Auth,
//     },
//     {
//       initialRouteName: 'Loading',
//     },
//   ),
// );

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Auth.Navigator initialRouteName="Loading">
        <Auth.Screen
          name="Loading"
          component={Loading}
          options={{ headerShown: false }}
        />
        <Auth.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
      </Auth.Navigator>

      <App.Navigator initialRouteName="Dashboard">
        <App.Screen name="Dashboard" component={Dashboard} />
      </App.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
