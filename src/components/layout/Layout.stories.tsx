import { Center } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { StoryArgs } from '@/types/storybook';
import { Layout } from '@/components/layout/Layout';

type TStory = StoryArgs<typeof Layout>;

export default {
  title: 'layouts/Layout',
  component: Layout,
  decorators: [
    (Story) => (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Story />} />
        </Route>
      </Routes>
    ),
  ],
} as ComponentMeta<TStory>;

const Template: ComponentStory<TStory> = () => (
  <Center minH="lg">Main content here</Center>
);

export const Default = Template.bind({});
