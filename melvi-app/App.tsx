import React, { useEffect } from 'react';
import Routes from './src/routes';

// Apollo
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';

// Apollo links
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';

// Utils
import { getToken } from './src/utils/token';

const httpLink = createHttpLink({
  uri: 'http://192.168.1.9:4500/graphql',
});

const cache = new InMemoryCache();

const initialCache = {
  token: null,
};

const authLink = setContext(async (_, { headers }) => {
  try {
    const token = await getToken();

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
  useEffect(() => {
    getToken().then(token => {
      client.writeData({ data: { token } });
    });
  });

  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  );
};

export default App;
