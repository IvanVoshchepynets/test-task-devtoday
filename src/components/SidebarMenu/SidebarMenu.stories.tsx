import type { Meta, StoryFn } from '@storybook/react';
import SidebarMenu from './SidebarMenu';

const meta: Meta<typeof SidebarMenu> = {
  title: 'Components/SidebarMenu',
  component: SidebarMenu,
};
export default meta;

const Template: StoryFn<typeof SidebarMenu> = (args) => <SidebarMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
  open: true,
  onClose: () => {},
  activeItem: 'Home',
  items: [
    { id: '1', label: 'Home', href: '/' },
    { id: '2', label: 'About', href: '/about' },
    { id: '3', label: 'Contact', href: '/contact' },
  ],
};

export const Nested = Template.bind({});
Nested.args = {
  open: true,
  onClose: () => {},
  activeItem: 'About',
  items: [
    {
      id: '1',
      label: 'Dashboard',
      children: [
        { id: '1-1', label: 'Reports' },
        { id: '1-2', label: 'Analytics' },
      ],
    },
    { id: '2', label: 'Settings', href: '/settings' },
  ],
};
