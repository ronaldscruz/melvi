import React from 'react';
import StyledCenteredContentView from './styled';
import { MIDNIGHT_BLUE } from '../../constants/colors';

type CenteredContentViewProps = {
  bgColor?: string;
  children?: React.ReactElement | React.ReactElement[];
};

const CenteredContentView: React.FC<CenteredContentViewProps> = props => {
  return (
    <StyledCenteredContentView bgColor={MIDNIGHT_BLUE}>
      {props.children}
    </StyledCenteredContentView>
  );
};

export default CenteredContentView;
