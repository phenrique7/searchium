import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { InfoIcon, Search2Icon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Text,
  Input,
  Button,
  Heading,
  InputGroup,
  SimpleGrid,
  FormControl,
  FormErrorMessage,
  InputLeftElement,
} from '@chakra-ui/react';

type FormFields = {
  search: string;
};

export function HomePage() {
  const navigate = useNavigate();
  const form = useForm<FormFields>({ defaultValues: { search: '' } });

  function onSubmit(data: FormFields) {
    navigate(`users/${data.search}`);
  }

  return (
    <Box mt={{ base: 32, md: 52 }} px={4}>
      <Heading
        as="h1"
        textAlign="center"
        size={{ base: '3xl', lg: '4xl' }}
        bg={`conic-gradient(from 90deg at 40% -25%, rgb(255, 215, 0), rgb(247, 157, 3), rgb(238, 105, 7), rgb(230, 57, 10), rgb(222, 13, 13), rgb(214, 16, 57), rgb(207, 18, 97), rgb(199, 21, 133), rgb(207, 18, 97), rgb(214, 16, 57), rgb(222, 13, 13), rgb(238, 105, 7), rgb(247, 157, 3), rgb(255, 215, 0), rgb(255, 215, 0), rgb(255, 215, 0))`}
        sx={{
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Search more than 92M users
      </Heading>
      <Text
        mt={4}
        mx="auto"
        fontSize="lg"
        color="gray.700"
        lineHeight="short"
        textAlign="center"
        maxInlineSize="50ch"
      >
        You can search for users with an account on GitHub and see their basic
        profile, repositories and other data.
      </Text>
      <Flex
        mt={8}
        as="form"
        mx={{ md: 'auto' }}
        justifyContent="center"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <SimpleGrid
          spacing={4}
          alignItems="flex-start"
          minW={{ base: 'full', md: 'sm' }}
          gridTemplateColumns={{ md: '3fr 1fr' }}
        >
          <FormControl isInvalid={!!form.formState.errors.search}>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Search2Icon color="gray.300" />
              </InputLeftElement>
              <Input
                w="full"
                bg="white"
                type="text"
                placeholder="GitHub's username..."
                _placeholder={{ fontSize: 'sm', color: 'gray.600' }}
                {...form.register('search', {
                  required: 'This field is required',
                  validate(value) {
                    const regexp = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;
                    const isValid = regexp.test(value.trim());
                    return isValid || 'Please, enter a valid username';
                  },
                })}
              />
            </InputGroup>
            <FormErrorMessage fontSize="xs">
              <InfoIcon mr={1.5} />
              {form.formState.errors.search?.message}
            </FormErrorMessage>
          </FormControl>
          <Button type="submit" fontSize="sm" colorScheme="blackAlpha">
            Search
          </Button>
        </SimpleGrid>
      </Flex>
    </Box>
  );
}
