import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

const meta = {
  title: 'Overlays/Alert dialog',
  component: 'n-alert-dialog',
  tags: ['autodocs'],
  render: () => html`
    <n-alert-dialog>
      <n-button slot="trigger" variant="destructive">Excluir conta</n-button>
      <span slot="title">Excluir esta conta?</span>
      <span slot="description">Os projetos deixam de ser acessíveis. Essa ação não pode ser desfeita.</span>
      <n-button slot="cancel" variant="outline">Cancelar</n-button>
      <n-button slot="action" variant="destructive">Excluir</n-button>
    </n-alert-dialog>
  `,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
