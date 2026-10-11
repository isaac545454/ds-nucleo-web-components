import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

type SpinnerArgs = {
  size: 'sm' | 'default' | 'lg';
  label: string;
};

const meta = {
  title: 'Feedback/Spinner',
  component: 'n-spinner',
  tags: ['autodocs'],
  args: {
    size: 'default',
    label: 'Carregando',
  },
  argTypes: {
    size: { control: 'select', options: ['sm', 'default', 'lg'] },
  },
  render: ({ size, label }) => html`<n-spinner size=${size} label=${label}></n-spinner>`,
} satisfies Meta<SpinnerArgs>;

export default meta;
type Story = StoryObj<SpinnerArgs>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => html`
    <div class="row">
      <n-spinner size="sm" label="Carregando pequeno"></n-spinner>
      <n-spinner label="Carregando"></n-spinner>
      <n-spinner size="lg" label="Carregando grande"></n-spinner>
    </div>
  `,
};
