import React from 'react';
import { HeaderWrapper, Text, MenuButton, MenuIcon } from './styled';

type HeaderProps = {
  pageTitle: string;
  openMenuAction?: Function;
};

const Header: React.FC<HeaderProps> = props => {
  return (
    <HeaderWrapper>
      <MenuButton onPress={props.openMenuAction}>
        <MenuIcon name="bars" />
      </MenuButton>
      <Text> {props.pageTitle} </Text>
    </HeaderWrapper>
  );
};

export default Header;
