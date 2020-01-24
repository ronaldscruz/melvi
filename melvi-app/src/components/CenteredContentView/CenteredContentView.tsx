import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

type CenteredContentViewProps = {
  bgColor: string;
  children: React.ReactNode | React.ReactNode[];
};

const CenteredContentView: React.FC<CenteredContentViewProps> = props => {
  const CenteredContentViewWrapper = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${props.bgColor};
  `;

  return <CenteredContentViewWrapper> {props.children} </CenteredContentViewWrapper>;
};

CenteredContentView.propTypes = {
  bgColor: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default CenteredContentView;
