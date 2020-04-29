import React from 'react';
import withApollo from 'next-with-apollo';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient, { InMemoryCache } from 'apollo-boost';

const GRAPHQL_URL = 'https://api.github.com/graphql';

const App = ({ Component, pageProps, apollo }) => (
  <ApolloProvider client={apollo}>
    <Component {...pageProps} />
  </ApolloProvider>
);

export default withApollo(({ initialState }) => {
  return new ApolloClient({
    uri: GRAPHQL_URL,
    cache: new InMemoryCache().restore(initialState || {}),
    request: (operation) => {
      const token = process.env.token;

      operation.setContext({
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
    },
  });
})(App);
