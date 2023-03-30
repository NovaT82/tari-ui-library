import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import MatButton from './MatButton';

export default {
  component: MatButton,
} as Meta<typeof MatButton>;

const Template: StoryFn<typeof MatButton> = (args) => <MatButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  variant: 'contained',
  color: 'primary',
};
