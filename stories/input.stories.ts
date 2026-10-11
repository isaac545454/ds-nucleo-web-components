import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

type InputArgs = {
  placeholder: string;
  type: string;
  disabled: boolean;
  readonly: boolean;
  value: string;
};

const meta = {
  title: 'Forms/Input',
  component: 'n-input',
  tags: ['autodocs'],
  args: {
    placeholder: 'voce@empresa.com',
    type: 'email',
    disabled: false,
    readonly: false,
    value: '',
  },
  render: ({ placeholder, type, disabled, readonly, value }) => html`
    <div class="stack">
      <n-label for="email">E-mail</n-label>
      <n-input
        id="email"
        name="email"
        type=${type}
        placeholder=${placeholder}
        value=${value}
        ?disabled=${disabled}
        ?readonly=${readonly}
      ></n-input>
    </div>
  `,
} satisfies Meta<InputArgs>;

export default meta;
type Story = StoryObj<InputArgs>;

export const Default: Story = {};

export const Disabled: Story = {
  args: { disabled: true, value: 'ada@empresa.com' },
};
