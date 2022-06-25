import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { StoryArgs } from '../../types/storybook';
import { NotFoundPage } from './NotFoundPage';

type TStory = StoryArgs<typeof NotFoundPage>;

export default {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,
} as ComponentMeta<TStory>;

const Template: ComponentStory<TStory> = () => <NotFoundPage />;

export const Default = Template.bind({});
