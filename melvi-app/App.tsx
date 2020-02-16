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

const initialCache = {
  token: null,
};

const authLink = setContext(async (_, { headers }) => {
  try {
    const token = await AsyncStorage.getItem('token');

    if (token) {
      return { headers: { ...headers, authorization: token } };
    } else {
      return {};
    }
  } catch (err) {
    console.error('Failed retrieving token from AsyncStorage.');
    return {};
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
  resolvers: {},
});

client.onResetStore(
  (): Promise<void> => {
    cache.writeData({ data: initialCache });
    return;
  },
);

const App: React.FC = () => {
  AsyncStorage.getItem('token').then(token => {
    client.writeData({ data: { token } });
  });

  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  );
};

export default App;
