import React from 'react';
import withApollo from 'next-with-apollo';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ThemeProvider } from 'emotion-theming';
import { Global } from '@emotion/core';

import { theme } from '../src/theme/theme';
import { Layout } from '../src/components/layout/layout';
import { SearchQueryProvider } from '../src/hooks/useSearchQuery';
import { globalStyles } from '../src/theme/global';

const GRAPHQL_URL = 'https://api.github.com/graphql';

const App = ({ Component, pageProps, apollo }) => (
  <ApolloProvider client={apollo}>
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />

      <Layout>
        <SearchQueryProvider>
          <Component {...pageProps} />
        </SearchQueryProvider>
      </Layout>
    </ThemeProvider>
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
