import React from 'react';
import StyledCenteredContentView from './styled';
import { DARK_BLUE } from '../../constants/colors';

type CenteredContentViewProps = {
  bgColor?: string;
  children?: React.ReactElement | React.ReactElement[];
};

const CenteredContentView: React.FC<CenteredContentViewProps> = props => {
  return (
    <StyledCenteredContentView bgColor={DARK_BLUE}>
      {props.children}
    </StyledCenteredContentView>
  );
};

export default CenteredContentView;
