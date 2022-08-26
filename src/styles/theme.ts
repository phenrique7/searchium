import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: {
      html: {
        overflowX: 'hidden',
        fontFamily: 'Inter, sans-serif',
      },
      body: {
        color: 'gray.900',
      },
    },
  },
  fonts: {
    heading: `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    body: `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    mono: `Inter, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New",monospace`,
  },
  colors: {
    blackAlpha: {
      500: 'rgba(0, 0, 0, 0.80)',
      600: 'rgba(0, 0, 0, 0.92)',
    },
  },
} as const);
