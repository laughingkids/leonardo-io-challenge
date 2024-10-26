'use client';
/**
 * This root provider component will centralize all global providers
 * 1. ChakraProvider
 * 2. Apollo Client Provider (TBC)
 * 3. Sharable Context Providers (if needed)
 */
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';

export default function RootProvider(props: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={defaultSystem}>{props.children}</ChakraProvider>
  );
}
