import React from 'react';
import { Header, Text, MenuButton, MenuIcon } from './styled';

type AppHeaderProps = {
  pageTitle: string;
  openMenuAction?: Function;
};

const AppHeader: React.FC<AppHeaderProps> = props => {
  return (
    <Header>
      <MenuButton onPress={props.openMenuAction}>
        <MenuIcon name="bars" />
      </MenuButton>
      <Text> {props.pageTitle} </Text>
    </Header>
  );
};

export default AppHeader;
