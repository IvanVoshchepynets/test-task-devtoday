import type { Meta, StoryFn } from '@storybook/react';
import { useState } from 'react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  args: {
    placeholder: 'Enter text...',
  },
};
export default meta;

const Template: StoryFn<typeof Input> = (args) => {
  const [val, setVal] = useState('');
  return <Input {...args} value={val} onChange={(e) => setVal(e.target.value)} />;
};

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Type something...',
};

export const WithValue = Template.bind({});
WithValue.args = {
  value: 'Hello world',
};
