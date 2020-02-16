import React from 'react';
import StyledLogo from './styled';

type LogoProps = {
  size: 'small' | 'medium' | 'large';
};

function requireRightLogo(size): React.ReactElement {
  const logo = {
    // small: (): React.ReactElement => (
    //   <StyledLogo source={require('../../assets/logo_small.png')} />
    // ),
    medium: (): React.ReactElement => (
      <StyledLogo source={require('../../assets/logo_medium.png')} />
    ),
    large: (): React.ReactElement => (
      <StyledLogo source={require('../../assets/logo_large.png')} />
    ),
  };

  return logo[size]();
}

/**
 * A standard component to display app logo
 * @param size Logo size ( small | medium | large )
 */
const Logo: React.FC<LogoProps> = props => {
  return requireRightLogo(props.size);
};

export default Logo;
