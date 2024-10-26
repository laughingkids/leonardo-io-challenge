'use client';
/**
 * This root provider component will centralize all global providers
 * 1. ChakraProvider
 * 2. Apollo Client Provider
 * 3. Sharable Context Providers (if needed)
 */
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import createApolloClient from './apollo-client';
import { ApolloProvider } from '@apollo/client';

export default function RootProvider(props: { children: React.ReactNode }) {
  const client = createApolloClient();

  return (
    <ApolloProvider client={client}>
      <ChakraProvider value={defaultSystem}>{props.children}</ChakraProvider>
    </ApolloProvider>
  );
}
