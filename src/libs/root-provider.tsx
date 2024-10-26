'use client';
/**
 * This root provider component will centralize all global providers
 * 1. ChakraProvider
 * 2. Apollo Client Provider
 * 3. Sharable Context Providers
 */
import { ChakraProvider } from '@chakra-ui/react';
import createApolloClient from './apollo-client';
import { ApolloProvider } from '@apollo/client';
import { UserDetailProvider } from '@context';

export default function RootProvider(props: { children: React.ReactNode }) {
  const client = createApolloClient();

  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <UserDetailProvider>{props.children}</UserDetailProvider>
      </ChakraProvider>
    </ApolloProvider>
  );
}
