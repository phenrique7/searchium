import * as React from 'react';
import { InfoIcon } from '@chakra-ui/icons';
import { Box, Text, Button, Center, VStack, Heading } from '@chakra-ui/react';

type ErrorBoundaryProps = {
  context?: string;
  children: React.ReactNode;
  variant?: 'card' | 'default';
};

type ErrorBoundaryState = {
  hasError: boolean;
};

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps | Readonly<ErrorBoundaryProps>) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const { context, variant = 'default' } = this.props;
    const isCardVariant = variant === 'card';

    if (this.state.hasError) {
      return (
        <Box
          borderRadius={isCardVariant ? 'md' : 'none'}
          bg={isCardVariant ? 'white' : 'transparent'}
          border={isCardVariant ? '1px solid #E8E9ED' : 'none'}
        >
          <VStack spacing={2} p={4} mx="auto" maxW="xl">
            <Center>
              <InfoIcon color="red.400" boxSize="2rem" />
            </Center>
            <Heading as="h3" fontSize="xl" fontWeight={600} textAlign="center">
              Oops! Something went wrong{' '}
              <span role="img" aria-label="Rosto com Monóculo">
                🧐
              </span>
            </Heading>
            <Text textAlign="center" maxW="md" mx="auto">
              Sorry for that, we could not bring the {context ?? 'requested'}{' '}
              data. Try refresh the page.
            </Text>
          </VStack>
          <Center mt={3} pb={4}>
            <Button
              onClick={() => {
                window.location.reload();
              }}
            >
              Refresh page
            </Button>
          </Center>
        </Box>
      );
    }

    return <>{this.props.children}</>;
  }
}
