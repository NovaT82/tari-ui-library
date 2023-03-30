import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    textColor: { control: 'color' },
  },
} as Meta<typeof Button>;

// Create a master template for mapping args to render the Button component
const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = { label: 'Primary 😃', size: 'large', type: 'primary' };

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, type: 'secondary', label: 'Secondary 😇' };
