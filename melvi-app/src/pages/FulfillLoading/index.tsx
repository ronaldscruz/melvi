import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

import { ActivityIndicator } from 'react-native';
import CenteredContentView from '../../components/CenteredContentView/CenteredContentView';

import { DARK_BLUE, WHITE } from '../../constants/colors';

type FulfillLoadingProps = {
  message?: string;
};

const LoadingLabel = styled.Text`
  font-size: 15px;
  color: ${WHITE};
`;

const FulfillLoading: React.FC<FulfillLoadingProps> = props => {
  return (
    <CenteredContentView bgColor={DARK_BLUE}>
      <LoadingLabel> {props.message} </LoadingLabel>
      <ActivityIndicator animating={true} color={WHITE} size="large" />
    </CenteredContentView>
  );
};

FulfillLoading.propTypes = {
  message: PropTypes.string,
};

export default FulfillLoading;
