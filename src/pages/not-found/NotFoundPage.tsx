import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button, Heading, Text, Flex } from '@chakra-ui/react';

export function NotFoundPage() {
  React.useEffect(() => {
    document.title = 'Searchium ― Page Not Found';
  }, []);

  return (
    <Flex
      px={4}
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
      mt={{ base: 32, md: 52 }}
    >
      <Heading as="h1" size="xl" textAlign="center">
        404 - Page Not Found
      </Heading>
      <Text
        mt={4}
        fontSize="lg"
        fontWeight="400"
        color="gray.600"
        textAlign="center"
      >
        The page you're looking for doesn't exist or is temporarily unavailable.
      </Text>
      <Button
        mt={8}
        to="/"
        as={Link}
        size="lg"
        fontSize="sm"
        colorScheme="blackAlpha"
      >
        Go to Homepage
      </Button>
    </Flex>
  );
}
