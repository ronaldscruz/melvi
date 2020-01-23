import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

type CenteredContentViewProps = {
  bgColor: string;
};

const CenteredContentView: React.FC<CenteredContentViewProps> = props => {
  const CenteredContentViewWrapper = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${props.bgColor};
  `;

  return <CenteredContentViewWrapper />;
};

CenteredContentView.propTypes = {
  bgColor: PropTypes.string,
};

export default CenteredContentView;
