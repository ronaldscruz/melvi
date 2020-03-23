import React from 'react';
import { HeaderWrapper, Text, MenuButton, MenuIcon } from './styled';

type HeaderProps = {
  pageTitle: string;
  main?: boolean;
  menuAction?: Function;
};

const Header: React.FC<HeaderProps> = ({ menuAction, main = true, pageTitle }) => {
  return (
    <HeaderWrapper>
      <MenuButton onPress={menuAction}>
        <MenuIcon name={main ? 'bars' : 'arrow-left'} />
      </MenuButton>
      <Text> {pageTitle} </Text>
    </HeaderWrapper>
  );
};

export default Header;
