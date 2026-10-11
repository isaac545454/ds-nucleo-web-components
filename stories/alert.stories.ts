import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

type AlertArgs = {
  variant: 'default' | 'destructive';
};

const meta = {
  title: 'Feedback/Alert',
  component: 'n-alert',
  tags: ['autodocs'],
  args: { variant: 'default' },
  argTypes: {
    variant: { control: 'inline-radio', options: ['default', 'destructive'] },
  },
  render: ({ variant }) => html`
    <n-alert variant=${variant} style="width: 24rem">
      <span slot="title">${variant === 'destructive' ? 'Não foi possível salvar' : 'Sessão renovada'}</span>
      ${variant === 'destructive' ? 'Tente de novo em alguns minutos.' : 'Você continua conectado por mais 30 minutos.'}
    </n-alert>
  `,
} satisfies Meta<AlertArgs>;

export default meta;
type Story = StoryObj<AlertArgs>;

export const Default: Story = {};

export const Destructive: Story = {
  args: { variant: 'destructive' },
};
