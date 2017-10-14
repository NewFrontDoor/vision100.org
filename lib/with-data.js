// @flow

import * as React from 'react';
import {ApolloProvider, getDataFromTree} from 'react-apollo';
import Head from 'next/head';
import initApollo from './init-apollo';

type NextContext = {
  pathname: string;
  query: any;
  req?: any;
  res?: any;
  jsonPageRes?: any;
  err?: any;
};

type NextComponentType<T> = React.ComponentType<T> | (Class<React.Component<T>> & {
  getInitialProps?: (context: NextContext) => Promise<T>;
});

type PropsInput = {
  url?: {
    query: string,
    pathname: string,
  };
};

type PropsOutput = {
  serverState: any;
};

// Gets the display name of a JSX component for dev tools
function getComponentDisplayName(Component): string {
  return Component.displayName || Component.name || 'Unknown';
}

export default function withData(ComposedComponent: NextComponentType<PropsInput>) {
  return class WithData extends React.Component<PropsOutput> {

    apollo = initApollo(this.props.serverState);

    static displayName = `WithData(${getComponentDisplayName(ComposedComponent)})`

    static async getInitialProps(ctx) {
      let serverState = {};

      // Evaluate the composed component's getInitialProps()
      let composedInitialProps = {};
      if (typeof ComposedComponent.getInitialProps === 'function') {
        composedInitialProps = await ComposedComponent.getInitialProps(ctx);
      }

      // Run all GraphQL queries in the component tree
      // and extract the resulting data
      if (!process.browser) {
        const apollo = initApollo();
        // Provide the `url` prop data in case a GraphQL query uses it
        const url = {query: ctx.query, pathname: ctx.pathname};
        try {
          // Run all GraphQL queries
          await getDataFromTree(
            <ApolloProvider client={apollo}>
              <ComposedComponent url={url} {...composedInitialProps}/>
            </ApolloProvider>
          );
        } catch (err) {
          // Prevent Apollo Client GraphQL errors from crashing SSR.
          // Handle them in components via the data.error prop:
          // http://dev.apollodata.com/react/api-queries.html#graphql-query-data-error
        }
        // GetDataFromTree does not call componentWillUnmount
        // head side effect therefore need to be cleared manually
        Head.rewind();

        // Extract query data from the Apollo store
        const state = apollo.getInitialState();

        serverState = {
          apollo: {
            // Only include the Apollo data state
            data: state.data
          }
        };
      }

      return {
        serverState,
        ...composedInitialProps
      };
    }

    render() {
      return (
        <ApolloProvider client={this.apollo}>
          <ComposedComponent {...this.props}/>
        </ApolloProvider>
      );
    }
  };
}
