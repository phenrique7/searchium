import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Error } from '@/components/error/Error';
import type { StoryArgs } from '@/types/storybook';

type TStory = StoryArgs<typeof Error>;

export default {
  title: 'components/Error',
  component: Error,
} as ComponentMeta<TStory>;

const Template: ComponentStory<TStory> = (args) => <Error {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: `We apologize for the inconvenience, but there was an error when bringing the information`,
};
