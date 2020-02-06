import React from 'react';
import Routes from './src/routes';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient, ApolloClientOptions } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { AsyncStorage } from 'react-native';

const httpLink = createHttpLink({
  uri: 'http://192.168.0.47:4500/graphql',
});

const authHeader = setContext(
  () =>
    new Promise(async (resolve, reject) => {
      try {
        const token = await AsyncStorage.getItem('token');
        token ? resolve({ headers: { Authorization: token } }) : resolve({});
      } catch (err) {
        console.error('Failed retrieving token from AsyncStorage.');
        reject();
      }
    }),
);

const client = new ApolloClient({
  link: authHeader.concat(httpLink),
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
