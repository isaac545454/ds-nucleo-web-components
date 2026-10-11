import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

const meta = {
  title: 'Forms/Label',
  component: 'n-label',
  tags: ['autodocs'],
  render: () => html`
    <div class="stack">
      <n-label for="nome">Nome</n-label>
      <n-input id="nome" name="nome" placeholder="Ada Lovelace"></n-input>
    </div>
  `,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
