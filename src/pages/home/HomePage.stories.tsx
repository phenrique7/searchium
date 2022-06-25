import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { HomePage } from '@/pages/home/HomePage';
import type { StoryArgs } from '@/types/storybook';

type TStory = StoryArgs<typeof HomePage>;

export default {
  title: 'pages/HomePage',
  component: HomePage,
} as ComponentMeta<TStory>;

const Template: ComponentStory<TStory> = () => <HomePage />;

export const Default = Template.bind({});
