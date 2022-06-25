import * as React from 'react';
import type { ComponentStory } from '@storybook/react';
import { ErrorBoundary } from '@/components/error-boundary/ErrorBoundary';

export default {
  title: 'components/ErrorBoundary',
  component: ErrorBoundary,
};

function ThrowError() {
  React.useEffect(() => {
    throw new Error('Something went wrong');
  }, []);

  return null;
}

const Template: ComponentStory<typeof ErrorBoundary> = () => (
  <ErrorBoundary>
    <ThrowError />
  </ErrorBoundary>
);

export const Default = Template.bind({});
