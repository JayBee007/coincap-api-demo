import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";

import { client } from "../src/graphql/client";

import { MainLayout } from "../src/components/Layout";

import "../styles/globals.scss";

function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ApolloProvider>
  );
}

export default App;
