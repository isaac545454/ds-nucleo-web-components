import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

type PopoverArgs = {
  placement: 'top' | 'right' | 'bottom' | 'left';
};

const meta = {
  title: 'Overlays/Popover',
  component: 'n-popover',
  tags: ['autodocs'],
  args: { placement: 'bottom' },
  argTypes: {
    placement: { control: 'select', options: ['top', 'right', 'bottom', 'left'] },
  },
  render: ({ placement }) => html`
    <n-popover placement=${placement}>
      <n-button slot="trigger" variant="outline">Dimensões</n-button>
      <div class="stack" style="width: 16rem">
        <n-label for="largura">Largura</n-label>
        <n-input id="largura" type="number" value="320"></n-input>
      </div>
    </n-popover>
  `,
} satisfies Meta<PopoverArgs>;

export default meta;
type Story = StoryObj<PopoverArgs>;

export const Default: Story = {};
