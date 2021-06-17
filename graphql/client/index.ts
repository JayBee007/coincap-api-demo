import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://graphql.coincap.io",
  cache: new InMemoryCache(),
});
