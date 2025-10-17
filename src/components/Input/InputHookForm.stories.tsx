import type { Meta, StoryFn } from '@storybook/react';
import { Controller, useForm } from 'react-hook-form';
import Input from './Input';

type FormValues = {
  email: string;
  password: string;
};

const meta: Meta = {
  title: 'Examples/Input with React Hook Form',
};
export default meta;

const Template: StoryFn = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues>({
    defaultValues: { email: '', password: '' },
    mode: 'onChange',
  });

  const onSubmit = (data: FormValues) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <div style={{ maxWidth: 360 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label style={{ display: 'block', marginBottom: 6 }}>Email</label>
        <Controller
          name="email"
          control={control}
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: 'Invalid email',
            },
          }}
          render={({ field }) => (
            <Input {...field} type="text" placeholder="you@example.com" clearable />
          )}
        />
        {errors.email && (
          <div style={{ color: 'crimson', fontSize: 12, marginTop: 4 }}>{errors.email.message}</div>
        )}

        <div style={{ height: 12 }} />

        <label style={{ display: 'block', marginBottom: 6 }}>Password</label>
        <Controller
          name="password"
          control={control}
          rules={{
            required: 'Password is required',
            minLength: { value: 6, message: 'Min length is 6' },
          }}
          render={({ field }) => (
            <Input {...field} type="password" placeholder="••••••" clearable />
          )}
        />
        {errors.password && (
          <div style={{ color: 'crimson', fontSize: 12, marginTop: 4 }}>
            {errors.password.message}
          </div>
        )}

        <div style={{ height: 16 }} />
        <button type="submit" disabled={isSubmitting} style={{ padding: '6px 12px' }}>
          Submit
        </button>

        {isSubmitSuccessful && <div style={{ color: 'seagreen', marginTop: 8 }}>Submitted</div>}
      </form>
    </div>
  );
};

export const HookFormExample = Template.bind({});
HookFormExample.args = {};
