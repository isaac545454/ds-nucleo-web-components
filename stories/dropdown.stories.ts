import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

type DropdownArgs = {
  placement: 'top' | 'right' | 'bottom' | 'left';
};

const meta = {
  title: 'Overlays/Dropdown',
  component: 'n-dropdown',
  tags: ['autodocs'],
  args: { placement: 'bottom' },
  argTypes: {
    placement: { control: 'select', options: ['top', 'right', 'bottom', 'left'] },
  },
  render: ({ placement }) => html`
    <n-dropdown placement=${placement}>
      <n-button slot="trigger" variant="outline">Conta</n-button>
      <n-menu-label>Ada Lovelace</n-menu-label>
      <n-menu-item shortcut="⇧⌘P">Perfil</n-menu-item>
      <n-menu-item>Cobrança</n-menu-item>
      <n-menu-separator></n-menu-separator>
      <n-menu-checkbox checked>Notificações</n-menu-checkbox>
      <n-menu-radio-group value="sistema">
        <n-menu-radio value="sistema">Tema do sistema</n-menu-radio>
        <n-menu-radio value="escuro">Tema escuro</n-menu-radio>
      </n-menu-radio-group>
      <n-menu-separator></n-menu-separator>
      <n-menu-sub label="Time">
        <n-menu-item>Convidar</n-menu-item>
        <n-menu-item disabled>Remover</n-menu-item>
      </n-menu-sub>
      <n-menu-separator></n-menu-separator>
      <n-menu-item>Sair</n-menu-item>
    </n-dropdown>
  `,
} satisfies Meta<DropdownArgs>;

export default meta;
type Story = StoryObj<DropdownArgs>;

export const Default: Story = {};
