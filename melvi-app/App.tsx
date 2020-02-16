import React from 'react';
import Routes from './src/routes';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { AsyncStorage } from 'react-native';

const httpLink = createHttpLink({
  uri: 'http://192.168.1.2:4500/graphql',
});

const cache = new InMemoryCache();

const authHeader = setContext(
  (_, { headers }) =>
    new Promise(async (resolve, reject) => {
      try {
        const token = await AsyncStorage.getItem('token');

        if (token) {
          cache.writeData({ data: { token } });
          resolve({ headers: { ...headers, authorization: token } });
        } else {
          resolve({});
        }
      } catch (err) {
        console.error('Failed retrieving token from AsyncStorage.');
        reject();
      }
    }),
);

const client = new ApolloClient({
  link: authHeader.concat(httpLink),
  cache,
  resolvers: {},
});

const initialCache = {
  token: '',
};

client.onResetStore(
  (): Promise<void> => {
    cache.writeData({ data: initialCache });
    return;
  },
);

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  );
};

export default App;
