import type { Meta, StoryObj } from '@storybook/react-vite';

import UserSessionComponent from './UserSession';

const meta = {
  title: 'Features/User/Session',
  component: UserSessionComponent,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof UserSessionComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
