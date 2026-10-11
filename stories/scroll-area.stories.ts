import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

const meta = {
  title: 'Layout/Scroll area',
  component: 'n-scroll-area',
  tags: ['autodocs'],
  render: () => html`
    <n-scroll-area style="width: 16rem; height: 8rem">
      ${Array.from({ length: 12 }, (_, index) => html`<p style="margin: 0 0 0.75rem">Item ${index + 1} da lista.</p>`)}
    </n-scroll-area>
  `,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
