import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

const meta = {
  title: 'Feedback/Skeleton',
  component: 'n-skeleton',
  tags: ['autodocs'],
  render: () => html`
    <div class="stack">
      <n-skeleton style="width: 40%; height: 1.25rem"></n-skeleton>
      <n-skeleton style="height: 0.875rem"></n-skeleton>
      <n-skeleton style="width: 80%; height: 0.875rem"></n-skeleton>
    </div>
  `,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
