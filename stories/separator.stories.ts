import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

const meta = {
  title: 'Layout/Separator',
  component: 'n-separator',
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Horizontal: Story = {
  render: () => html`
    <div class="stack">
      <span>Conta</span>
      <n-separator></n-separator>
      <span>Preferências</span>
    </div>
  `,
};

export const Vertical: Story = {
  render: () => html`
    <div class="row" style="height: 1.5rem">
      <span>Blog</span>
      <n-separator orientation="vertical"></n-separator>
      <span>Docs</span>
    </div>
  `,
};
