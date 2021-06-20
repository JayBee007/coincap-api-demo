import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_HTTPS_URL,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          exchanges: {
            keyArgs: false,
          },
          exchangeMarkets: {
            keyArgs: ["exchangeId"],
          },
        },
      },
    },
  }),
});
