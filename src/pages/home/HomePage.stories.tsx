import { Route, Routes } from 'react-router-dom';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { HomePage } from '@/pages/home/HomePage';
import type { StoryArgs } from '@/types/storybook';
import { Layout } from '@/components/layout/Layout';

type TStory = StoryArgs<typeof HomePage>;

export default {
  title: 'pages/HomePage',
  component: HomePage,
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

const Template: ComponentStory<TStory> = () => <HomePage />;

export const Default = Template.bind({});
