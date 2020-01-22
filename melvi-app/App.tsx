import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

const ViewCenteredContent = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const TitleText = styled.Text`
  font-weight: bold;
  font-size: 14;
`;

const App = () => {
  return (
    <ViewCenteredContent>
      <TitleText>Open up App.tsx to start working on your app!</TitleText>
    </ViewCenteredContent>
  );
};

export default App;
