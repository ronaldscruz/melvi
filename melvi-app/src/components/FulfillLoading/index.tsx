import React from 'react';
import { CLOUDS, MIDNIGHT_BLUE } from '../../constants/colors';

import { LoadingLabel } from './styled';
import { ActivityIndicator } from 'react-native';

import CenteredContentView from '../CenteredContentView';
import Logo from '../Logo';

type FulfillLoadingProps = {
  message?: string;
};

/**
 * A loading that fills the entire screen
 * @param message Optional message to be displayed above the ActivityIndicator
 */
const FulfillLoading: React.FC<FulfillLoadingProps> = props => {
  return (
    <CenteredContentView bgColor={MIDNIGHT_BLUE}>
      <Logo size="medium" />
      {props.message && <LoadingLabel> {props.message} </LoadingLabel>}
      <ActivityIndicator animating={true} color={CLOUDS} size="large" />
    </CenteredContentView>
  );
};

export default FulfillLoading;
