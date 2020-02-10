import React, { useEffect } from 'react';
import { AsyncStorage } from 'react-native';
import { LoadingNavigation } from '../../types/Auth';

import FulfillLoading from '../../components/FulfillLoading';

type LoadingProps = {
  navigation: LoadingNavigation;
};

const Loading: React.FC<LoadingProps> = props => {
  useEffect(() => {
    AsyncStorage.getItem('token').then(token => {
      if (token) {
        props.navigation.navigate('App');
      } else {
        props.navigation.navigate('SignIn');
      }
    });
  });

  return <FulfillLoading />;
};

export default Loading;
