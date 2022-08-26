import FullScreen from 'react-div-100vh';
import { Outlet } from 'react-router-dom';
import {
  Box,
  Link,
  Flex,
  Button,
  HStack,
  Divider,
  Container,
  IconButton,
} from '@chakra-ui/react';
import { SunIcon } from '@/icons/SunIcon';
import { LogoIcon } from '@/icons/LogoIcon';
import { GitHubIcon } from '@/icons/GitHubIcon';

export function Layout() {
  return (
    <FullScreen>
      <Box
        w="full"
        h="full"
        position="absolute"
        sx={{ maskImage: 'linear-gradient(to bottom, transparent, black)' }}
        _before={{
          w: 'full',
          h: 'full',
          content: '""',
          position: 'absolute',
          background: `rgb(248 250 252/1) url('/images/hero-light.jpg') no-repeat bottom`,
        }}
        _after={{
          w: 'full',
          h: 'full',
          content: '""',
          position: 'absolute',
          backgroundSize: '50px 50px',
          backgroundPosition: '0 0, 25px 25px',
          backgroundImage: `radial-gradient(#ced4da 1px, transparent 0), radial-gradient(#ced4da 1px, transparent 0)`,
        }}
      />
      <Box as="main" zIndex={1} position="relative">
        <Flex
          as="header"
          alignItems="center"
          pt={{ base: 3.5, lg: 6 }}
          justifyContent="space-between"
        >
          <Container
            display="flex"
            maxW="container.lg"
            justifyContent="space-between"
          >
            <LogoIcon w={{ base: 40, md: 48 }} />
            <HStack spacing={{ base: 3, md: 5 }}>
              <Button
                size="sm"
                variant="outline"
                position="relative"
                id="feedback-button"
                right={{ base: 0, md: 3 }}
              >
                Feedback
              </Button>
              <Divider
                orientation="vertical"
                display={{ base: 'none', md: 'inline-block' }}
              />
              <IconButton
                size="sm"
                variant="ghost"
                icon={<SunIcon w={6} />}
                aria-label="Switch theme"
              />
              <Link
                title="Source on Github"
                href="https://github.com/phenrique7/searchium"
              >
                <GitHubIcon w={6} />
              </Link>
            </HStack>
          </Container>
        </Flex>
        <Outlet />
      </Box>
    </FullScreen>
  );
}
