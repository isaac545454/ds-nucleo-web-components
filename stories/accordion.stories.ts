import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

type AccordionArgs = {
  type: 'single' | 'multiple';
};

const meta = {
  title: 'Layout/Accordion',
  component: 'n-accordion',
  tags: ['autodocs'],
  args: { type: 'single' },
  argTypes: {
    type: { control: 'inline-radio', options: ['single', 'multiple'] },
  },
  render: ({ type }) => html`
    <n-accordion type=${type} style="width: 24rem">
      <n-accordion-item value="envio" open>
        <span slot="heading">Envio</span>
        Pedidos saem em até dois dias úteis.
      </n-accordion-item>
      <n-accordion-item value="troca">
        <span slot="heading">Troca</span>
        A troca fica aberta por 30 dias.
      </n-accordion-item>
      <n-accordion-item value="nota" disabled>
        <span slot="heading">Nota fiscal</span>
        Disponível depois do pagamento.
      </n-accordion-item>
    </n-accordion>
  `,
} satisfies Meta<AccordionArgs>;

export default meta;
type Story = StoryObj<AccordionArgs>;

export const Default: Story = {};

export const Multiple: Story = {
  args: { type: 'multiple' },
};
