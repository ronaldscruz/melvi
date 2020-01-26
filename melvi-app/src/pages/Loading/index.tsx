import React, { useEffect } from 'react';
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
  useEffect(() => {
    AsyncStorage.getItem('token').then(token => {
      if (token) {
        props.navigation.navigate('App');
      } else {
        props.navigation.navigate('Auth');
      }
    });
  });

  return <FulfillLoading message="Loading. Please, wait..." />;
};

export default Loading;
