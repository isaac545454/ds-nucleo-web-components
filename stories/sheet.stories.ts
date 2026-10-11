import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

type SheetArgs = {
  side: 'top' | 'right' | 'bottom' | 'left';
};

const meta = {
  title: 'Overlays/Sheet',
  component: 'n-sheet',
  tags: ['autodocs'],
  args: { side: 'right' },
  argTypes: {
    side: { control: 'select', options: ['top', 'right', 'bottom', 'left'] },
  },
  render: ({ side }) => html`
    <n-sheet side=${side}>
      <n-button slot="trigger" variant="outline">Abrir painel</n-button>
      <span slot="title">Filtros</span>
      <span slot="description">Refine a lista de pedidos.</span>
      <div class="field">
        <n-label for="status">Status</n-label>
        <n-select id="status" placeholder="Qualquer">
          <n-option value="aberto">Aberto</n-option>
          <n-option value="pago">Pago</n-option>
        </n-select>
      </div>
      <div slot="footer">
        <n-button data-n-close>Aplicar</n-button>
      </div>
    </n-sheet>
  `,
} satisfies Meta<SheetArgs>;

export default meta;
type Story = StoryObj<SheetArgs>;

export const Default: Story = {};
