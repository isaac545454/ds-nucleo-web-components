import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

type ToggleArgs = {
  pressed: boolean;
  disabled: boolean;
  variant: 'default' | 'outline';
  size: 'default' | 'sm' | 'lg';
};

const meta = {
  title: 'Forms/Toggle',
  component: 'n-toggle',
  tags: ['autodocs'],
  args: {
    pressed: false,
    disabled: false,
    variant: 'default',
    size: 'default',
  },
  argTypes: {
    variant: { control: 'select', options: ['default', 'outline'] },
    size: { control: 'select', options: ['default', 'sm', 'lg'] },
  },
  render: ({ pressed, disabled, variant, size }) => html`
    <n-toggle variant=${variant} size=${size} ?pressed=${pressed} ?disabled=${disabled}>Negrito</n-toggle>
  `,
} satisfies Meta<ToggleArgs>;

export default meta;
type Story = StoryObj<ToggleArgs>;

export const Default: Story = {};

export const Outline: Story = {
  args: { variant: 'outline', pressed: true },
};

export const Disabled: Story = {
  args: { disabled: true },
};
