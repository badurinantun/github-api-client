import React from 'react';
import withApollo from 'next-with-apollo';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ThemeProvider } from 'emotion-theming';
import { Global, css } from '@emotion/core';

import { theme, Theme } from '../src/theme/theme';
import { Layout } from '../src/components/layout/layout';
import { SearchQueryProvider } from '../src/hooks/useSearchQuery';

const GRAPHQL_URL = 'https://api.github.com/graphql';

const App = ({ Component, pageProps, apollo }) => (
  <ApolloProvider client={apollo}>
    <ThemeProvider theme={theme}>
      <Global
        styles={(theme: Theme) => css`
          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }

          body,
          h1,
          h2,
          h3,
          h4,
          p {
            margin: 0;
          }

          body {
            min-height: 100vh;
            scroll-behavior: smooth;
            text-rendering: optimizeSpeed;
            background-color: ${theme.colors.white};
            color: ${theme.colors.text};
            font-family: ${theme.typography.fontFamily};
            line-height: 1.5;
          }

          input,
          button {
            outline: none;
            border: none;
            font: inherit;
          }
        `}
      />
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
