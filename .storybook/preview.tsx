import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { StoryContext } from '@storybook/react';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';
import { theme } from '@/styles/theme';
import { __STORYBOOK__ } from '@/utils/constants';
import { queryClientConfig } from '@/lib/react-query';
import type { BaseDecoratorsArgs } from '@/types/storybook';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story: () => React.ReactElement, context: StoryContext) => {
    const contextArgs: BaseDecoratorsArgs = context.args;
    const queryClient = new QueryClient(queryClientConfig);

    return (
      <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <MemoryRouter initialEntries={contextArgs.routeEntries ?? ['/']}>
            <Box p={context.componentId.includes('components') ? 4 : 0}>
              <Story />
            </Box>
          </MemoryRouter>
          {__STORYBOOK__ ? <ReactQueryDevtools initialIsOpen={false} /> : null}
        </QueryClientProvider>
      </ChakraProvider>
    );
  },
];
