import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

type TextareaArgs = {
  placeholder: string;
  rows: number;
  disabled: boolean;
  value: string;
};

const meta = {
  title: 'Forms/Textarea',
  component: 'n-textarea',
  tags: ['autodocs'],
  args: {
    placeholder: 'Escreva uma nota',
    rows: 4,
    disabled: false,
    value: '',
  },
  render: ({ placeholder, rows, disabled, value }) => html`
    <div class="stack">
      <n-label for="nota">Nota</n-label>
      <n-textarea id="nota" name="nota" placeholder=${placeholder} rows=${rows} value=${value} ?disabled=${disabled}></n-textarea>
    </div>
  `,
} satisfies Meta<TextareaArgs>;

export default meta;
type Story = StoryObj<TextareaArgs>;

export const Default: Story = {};

export const Disabled: Story = {
  args: { disabled: true, value: 'Texto que não pode ser editado.' },
};
