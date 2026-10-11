import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

type TabsArgs = {
  value: string;
};

const meta = {
  title: 'Layout/Tabs',
  component: 'n-tabs',
  tags: ['autodocs'],
  args: { value: 'conta' },
  argTypes: {
    value: { control: 'select', options: ['conta', 'senha'] },
  },
  render: ({ value }) => html`
    <n-tabs value=${value} style="width: 24rem">
      <n-tab-list>
        <n-tab value="conta">Conta</n-tab>
        <n-tab value="senha">Senha</n-tab>
        <n-tab value="api" disabled>API</n-tab>
      </n-tab-list>
      <n-tab-panel value="conta">Atualize o nome e o e-mail visíveis para o time.</n-tab-panel>
      <n-tab-panel value="senha">A senha precisa de pelo menos 8 caracteres.</n-tab-panel>
      <n-tab-panel value="api">Chaves de API ficam aqui.</n-tab-panel>
    </n-tabs>
  `,
} satisfies Meta<TabsArgs>;

export default meta;
type Story = StoryObj<TabsArgs>;

export const Default: Story = {};
