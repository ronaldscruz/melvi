import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { CLOUDS, MIDNIGHT_BLUE } from '../../constants/colors';

import { ActivityIndicator } from 'react-native';
import CenteredContentView from '../../components/CenteredContentView';
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams,
} from 'react-navigation';

type FulfillLoadingProps = {
  message?: string;
  navigation?: NavigationScreenProp<NavigationState, NavigationParams>;
};

const LoadingLabel = styled.Text`
  font-size: 15px;
  color: ${CLOUDS};
`;

const FulfillLoading: React.FC<FulfillLoadingProps> = props => {
  // TODO: Verify if the user already have a session in async storage
  useEffect(() => {
    props.navigation.navigate('Auth');
  });

  return (
    <CenteredContentView bgColor={MIDNIGHT_BLUE}>
      <LoadingLabel> {props.message} </LoadingLabel>
      <ActivityIndicator animating={true} color={CLOUDS} size="large" />
    </CenteredContentView>
  );
};

export default FulfillLoading;
