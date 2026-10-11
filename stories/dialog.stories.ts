import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

const meta = {
  title: 'Overlays/Dialog',
  component: 'n-dialog',
  tags: ['autodocs'],
  render: () => html`
    <n-dialog>
      <n-button slot="trigger">Entrar</n-button>
      <span slot="title">Acesso</span>
      <span slot="description">Use o e-mail da empresa.</span>
      <div class="field">
        <n-label for="dialog-email">E-mail</n-label>
        <n-input id="dialog-email" name="email" type="email" placeholder="voce@empresa.com"></n-input>
      </div>
      <div slot="footer" class="row">
        <n-button data-n-close variant="outline">Cancelar</n-button>
        <n-button type="submit">Confirmar</n-button>
      </div>
    </n-dialog>
  `,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
