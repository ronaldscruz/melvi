import React, { useEffect, useState } from 'react';
import { AsyncStorage } from 'react-native';
import FulfillLoading from '../../components/FulfillLoading';
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams,
} from 'react-navigation';

type LoadingProps = {
  navigation?: NavigationScreenProp<NavigationState, NavigationParams>;
};

const Loading: React.FC<LoadingProps> = props => {
  const [authentication, setAuthenticated] = useState('loading');

  const userIsAuthenticated = async (): Promise<void> => {
    const token = !!(await AsyncStorage.getItem('token'));
    console.log('Token result: ', token);
    token ? setAuthenticated('authenticated') : setAuthenticated('not_authenticated');
  };

  useEffect(() => {
    console.log('Loading component rendered, asking for token...');
    userIsAuthenticated();
    console.log('Comparing token status');
    if (authentication === 'authenticated') props.navigation.navigate('App');
    if (authentication === 'not_authenticated') props.navigation.navigate('Auth');
  });

  return <FulfillLoading message="Loading. Please, wait..." />;
};

export default Loading;
