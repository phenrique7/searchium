import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { StoryArgs } from '@/types/storybook';
import { Layout } from '@/components/layout/Layout';
import { NotFoundPage } from '@/pages/not-found/NotFoundPage';

type TStory = StoryArgs<typeof NotFoundPage>;

export default {
  title: 'pages/Not Found Page',
  component: NotFoundPage,
  args: {
    routeEntries: ['/wrong-url'],
  },
  decorators: [
    (Story) => (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="*" element={<Story />} />
        </Route>
      </Routes>
    ),
  ],
} as ComponentMeta<TStory>;

const Template: ComponentStory<TStory> = () => <NotFoundPage />;

export const Default = Template.bind({});
