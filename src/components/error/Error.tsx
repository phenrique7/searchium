import * as React from 'react';
import { InfoIcon } from '@chakra-ui/icons'
import { Box, BoxProps, Center, Heading, Text } from '@chakra-ui/react';

type ErrorProps = BoxProps;

export function Error(props: ErrorProps) {
  const { children, ...otherProps } = props;

  return (
    <Box {...otherProps}>
      <Center>
        <InfoIcon color="red.medium" boxSize="2rem" />
      </Center>
      <Heading mt={2} as="h3" fontSize="xl" fontWeight={600} textAlign="center">
        Oops! Something went wrong{' '}
        <span role="img" aria-label="Rosto com Monóculo">
          🧐
        </span>
      </Heading>
      <Text mt={2} textAlign="center" maxW="lg" mx="auto">
        {children}
      </Text>
    </Box>
  );
}
