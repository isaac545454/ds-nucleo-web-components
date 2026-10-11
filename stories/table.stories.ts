import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

const meta = {
  title: 'Layout/Table',
  component: 'n-table',
  tags: ['autodocs'],
  render: () => html`
    <n-table style="width: 28rem">
      <table>
        <caption>Membros do time</caption>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Papel</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ada Lovelace</td>
            <td>Admin</td>
          </tr>
          <tr>
            <td>Grace Hopper</td>
            <td>Editora</td>
          </tr>
        </tbody>
      </table>
    </n-table>
  `,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
