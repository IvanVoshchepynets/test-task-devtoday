import type { Meta, StoryFn } from '@storybook/react';
import { useState } from 'react';
import Toast, { type ToastProps } from './Toast';

type ToastStoryProps = Omit<ToastProps, 'id' | 'onClose' | 'children'> & {
  message: string;
};

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
};
export default meta;

const Template: StoryFn<ToastStoryProps> = (args) => {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <button onClick={() => setVisible(true)}>Show Toast</button>
      {visible && (
        <Toast
          id="example-toast"
          type={args.type}
          duration={args.duration}
          onClose={() => setVisible(false)}
        >
          {args.message}
        </Toast>
      )}
    </>
  );
};

export const Success = Template.bind({});
Success.args = {
  message: 'Operation successful!',
  type: 'success',
};

export const Error = Template.bind({});
Error.args = {
  message: 'Something went wrong.',
  type: 'error',
};

export const Info = Template.bind({});
Info.args = {
  message: 'This is an info message.',
  type: 'info',
};
