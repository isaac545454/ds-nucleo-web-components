import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

type SelectArgs = {
  placeholder: string;
  disabled: boolean;
  value: string;
};

const meta = {
  title: 'Forms/Select',
  component: 'n-select',
  tags: ['autodocs'],
  args: {
    placeholder: 'Selecione um plano',
    disabled: false,
    value: '',
  },
  render: ({ placeholder, disabled, value }) => html`
    <div class="stack">
      <n-label for="plano">Plano</n-label>
      <n-select id="plano" name="plano" placeholder=${placeholder} value=${value} ?disabled=${disabled}>
        <n-option-group label="Pessoal">
          <n-option value="gratis">Grátis</n-option>
          <n-option value="pro">Pro</n-option>
        </n-option-group>
        <n-option-group label="Empresa">
          <n-option value="time">Time</n-option>
          <n-option value="enterprise" disabled>Enterprise</n-option>
        </n-option-group>
      </n-select>
    </div>
  `,
} satisfies Meta<SelectArgs>;

export default meta;
type Story = StoryObj<SelectArgs>;

export const Default: Story = {};

export const Selected: Story = {
  args: { value: 'pro' },
};

export const Disabled: Story = {
  args: { disabled: true, value: 'time' },
};
