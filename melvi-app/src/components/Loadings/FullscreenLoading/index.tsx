import React from 'react';
import { CLOUDS, MIDNIGHT_BLUE } from '../../../constants/colors';

import { LoadingLabel } from './styled';
import { ActivityIndicator } from 'react-native';

import CenteredContentView from '../../Display/CenteredContentView';
import Logo from '../../Display/Logo';

type FullscreenLoadingProps = {
  message?: string;
};

/**
 * A loading that fills the entire screen
 * @param message Optional message to be displayed above the ActivityIndicator
 */
const FullscreenLoading: React.FC<FullscreenLoadingProps> = props => {
  return (
    <CenteredContentView bgColor={MIDNIGHT_BLUE}>
      <Logo size="medium" />
      {props.message && <LoadingLabel> {props.message} </LoadingLabel>}
      <ActivityIndicator animating={true} color={CLOUDS} size="large" />
    </CenteredContentView>
  );
};

export default FullscreenLoading;
