import { Box, Container, Wrap, WrapItem } from '@chakra-ui/react';

export function UserPage() {
  return (
    <Box boxShadow="inset 0 -1px #eaeaea" pb={3}>
      <Container maxW="container.lg">
        <Wrap mt={6} spacing={7}>
          <WrapItem>Overview</WrapItem>
          <WrapItem>Repositories</WrapItem>
          <WrapItem>Organizations</WrapItem>
        </Wrap>
      </Container>
    </Box>
  );
}
