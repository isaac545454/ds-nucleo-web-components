import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

type CheckboxArgs = {
  checked: boolean;
  disabled: boolean;
  label: string;
};

const meta = {
  title: 'Forms/Checkbox',
  component: 'n-checkbox',
  tags: ['autodocs'],
  args: {
    checked: false,
    disabled: false,
    label: 'Aceito os termos',
  },
  render: ({ checked, disabled, label }) => html`
    <div class="row">
      <n-checkbox id="termos" name="termos" ?checked=${checked} ?disabled=${disabled}></n-checkbox>
      <n-label for="termos">${label}</n-label>
    </div>
  `,
} satisfies Meta<CheckboxArgs>;

export default meta;
type Story = StoryObj<CheckboxArgs>;

export const Default: Story = {};

export const Checked: Story = {
  args: { checked: true },
};

export const Disabled: Story = {
  args: { disabled: true, checked: true },
};
