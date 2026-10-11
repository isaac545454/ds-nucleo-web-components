import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

type ProgressArgs = {
  value: number;
  max: number;
};

const meta = {
  title: 'Feedback/Progress',
  component: 'n-progress',
  tags: ['autodocs'],
  args: { value: 60, max: 100 },
  render: ({ value, max }) => html`<n-progress style="width: 16rem" value=${value} max=${max}></n-progress>`,
} satisfies Meta<ProgressArgs>;

export default meta;
type Story = StoryObj<ProgressArgs>;

export const Default: Story = {};

export const Empty: Story = {
  args: { value: 0 },
};

export const Complete: Story = {
  args: { value: 100 },
};
