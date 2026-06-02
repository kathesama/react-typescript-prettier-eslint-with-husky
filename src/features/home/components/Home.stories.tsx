import type { Meta, StoryObj } from '@storybook/react-vite';

import Home from './Home';

const meta = {
  title: 'Features/Home',
  component: Home,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ background: '#111827', padding: '2rem' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Home>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
