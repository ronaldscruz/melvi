import React from 'react';
import Routes from './src/routes';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { AsyncStorage } from 'react-native';

// const authLink = setContext(async (req, { headers }) => {
//   const token = await AsyncStorage.getItem('token');

//   return {
//     ...headers,
//     headers: {
//       Authorization: token ? token : null,
//     },
//   };
// });

const link = createHttpLink({
  uri: 'http://192.168.1.2:4500/graphql',
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  );
};

export default App;
