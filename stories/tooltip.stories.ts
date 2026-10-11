import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

type TooltipArgs = {
  text: string;
  placement: 'top' | 'right' | 'bottom' | 'left';
};

const meta = {
  title: 'Overlays/Tooltip',
  component: 'n-tooltip',
  tags: ['autodocs'],
  args: {
    text: 'Atalho para salvar',
    placement: 'top',
  },
  argTypes: {
    placement: { control: 'select', options: ['top', 'right', 'bottom', 'left'] },
  },
  render: ({ text, placement }) => html`
    <n-tooltip text=${text} placement=${placement}>
      <n-button slot="trigger" variant="outline">Salvar</n-button>
    </n-tooltip>
  `,
} satisfies Meta<TooltipArgs>;

export default meta;
type Story = StoryObj<TooltipArgs>;

export const Default: Story = {};
