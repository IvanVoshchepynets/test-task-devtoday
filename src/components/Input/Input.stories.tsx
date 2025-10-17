import type { Meta, StoryFn } from '@storybook/react';
import { useState } from 'react';
import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  args: {
    placeholder: 'Enter text…',
    type: 'text',
    clearable: false,
    disabled: false,
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'password', 'number'],
    },
    clearable: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};
export default meta;

const Template: StoryFn<typeof Input> = (args) => {
  const [val, setVal] = useState('');
  return <Input {...args} value={val} onChange={(e) => setVal(e.target.value)} />;
};

export const Text = Template.bind({});
Text.args = {};

export const Password = Template.bind({});
Password.args = {
  type: 'password',
  clearable: true,
  placeholder: 'Enter password…',
};

export const Number = Template.bind({});
Number.args = {
  type: 'number',
  placeholder: '42',
};
