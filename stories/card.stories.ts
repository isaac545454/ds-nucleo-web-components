import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

const meta = {
  title: 'Layout/Card',
  component: 'n-card',
  tags: ['autodocs'],
  render: () => html`
    <n-card style="width: 24rem">
      <n-card-header>
        <n-card-title>Plano Pro</n-card-title>
        <n-card-description>Para times que publicam todo dia.</n-card-description>
      </n-card-header>
      <n-card-content>Inclui componentes, tokens e o catálogo do Storybook.</n-card-content>
      <n-card-footer>
        <n-button>Assinar</n-button>
        <n-button variant="outline">Detalhes</n-button>
      </n-card-footer>
    </n-card>
  `,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
