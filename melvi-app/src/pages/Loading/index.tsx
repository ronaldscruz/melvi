import React, { useEffect } from 'react';
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
  // TODO: Verify if the user already have a session in async storage
  useEffect(() => {
    props.navigation.navigate('Auth');
  });

  return <FulfillLoading message="Loading. Please, wait..." />;
};

export default Loading;
