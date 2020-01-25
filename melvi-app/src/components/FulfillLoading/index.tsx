import React from 'react';
import styled from 'styled-components/native';

import { CLOUDS, MIDNIGHT_BLUE } from '../../constants/colors';

import { ActivityIndicator } from 'react-native';
import CenteredContentView from '../CenteredContentView';

type FulfillLoadingProps = {
  message?: string;
};

const LoadingLabel = styled.Text`
  font-size: 15px;
  color: ${CLOUDS};
  margin-bottom: 32px;
`;

const FulfillLoading: React.FC<FulfillLoadingProps> = props => {
  return (
    <CenteredContentView bgColor={MIDNIGHT_BLUE}>
      <LoadingLabel> {props.message} </LoadingLabel>
      <ActivityIndicator animating={true} color={CLOUDS} size="large" />
    </CenteredContentView>
  );
};

export default FulfillLoading;
