import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

type RadioArgs = {
  value: string;
  disabled: boolean;
};

const meta = {
  title: 'Forms/Radio',
  component: 'n-radio-group',
  tags: ['autodocs'],
  args: {
    value: 'mensal',
    disabled: false,
  },
  argTypes: {
    value: {
      control: 'select',
      options: ['mensal', 'anual'],
    },
  },
  render: ({ value, disabled }) => html`
    <n-radio-group name="plano" value=${value} ?disabled=${disabled}>
      <n-radio value="mensal">Mensal</n-radio>
      <n-radio value="anual">Anual</n-radio>
    </n-radio-group>
  `,
} satisfies Meta<RadioArgs>;

export default meta;
type Story = StoryObj<RadioArgs>;

export const Default: Story = {};

export const Disabled: Story = {
  args: { disabled: true },
};
