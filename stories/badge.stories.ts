import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

type BadgeArgs = {
  variant: 'default' | 'secondary' | 'destructive' | 'outline';
  label: string;
};

const meta = {
  title: 'Feedback/Badge',
  component: 'n-badge',
  tags: ['autodocs'],
  args: {
    variant: 'default',
    label: 'Novo',
  },
  argTypes: {
    variant: { control: 'select', options: ['default', 'secondary', 'destructive', 'outline'] },
  },
  render: ({ variant, label }) => html`<n-badge variant=${variant}>${label}</n-badge>`,
} satisfies Meta<BadgeArgs>;

export default meta;
type Story = StoryObj<BadgeArgs>;

export const Default: Story = {};

export const Variants: Story = {
  render: () => html`
    <div class="row">
      <n-badge>Default</n-badge>
      <n-badge variant="secondary">Secondary</n-badge>
      <n-badge variant="destructive">Destructive</n-badge>
      <n-badge variant="outline">Outline</n-badge>
    </div>
  `,
};
