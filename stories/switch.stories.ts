import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

type SwitchArgs = {
  checked: boolean;
  disabled: boolean;
};

const meta = {
  title: 'Forms/Switch',
  component: 'n-switch',
  tags: ['autodocs'],
  args: {
    checked: false,
    disabled: false,
  },
  render: ({ checked, disabled }) => html`
    <div class="row">
      <n-switch id="alertas" name="alertas" ?checked=${checked} ?disabled=${disabled}></n-switch>
      <n-label for="alertas">Alertas por e-mail</n-label>
    </div>
  `,
} satisfies Meta<SwitchArgs>;

export default meta;
type Story = StoryObj<SwitchArgs>;

export const Default: Story = {};

export const Checked: Story = {
  args: { checked: true },
};

export const Disabled: Story = {
  args: { disabled: true },
};
