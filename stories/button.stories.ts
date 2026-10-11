import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

type ButtonArgs = {
  label: string;
  variant: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size: 'default' | 'sm' | 'lg' | 'icon';
  disabled: boolean;
};

const meta = {
  title: 'Forms/Button',
  component: 'n-button',
  tags: ['autodocs'],
  args: {
    label: 'Continuar',
    variant: 'default',
    size: 'default',
    disabled: false,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
    },
  },
  render: ({ label, variant, size, disabled }) => html`
    <n-button variant=${variant} size=${size} ?disabled=${disabled}>${size === 'icon' ? '+' : label}</n-button>
  `,
} satisfies Meta<ButtonArgs>;

export default meta;
type Story = StoryObj<ButtonArgs>;

export const Default: Story = {};

export const Variants: Story = {
  render: () => html`
    <div class="row">
      <n-button>Default</n-button>
      <n-button variant="destructive">Destructive</n-button>
      <n-button variant="outline">Outline</n-button>
      <n-button variant="secondary">Secondary</n-button>
      <n-button variant="ghost">Ghost</n-button>
      <n-button variant="link">Link</n-button>
    </div>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div class="row">
      <n-button size="sm">Pequeno</n-button>
      <n-button>Padrão</n-button>
      <n-button size="lg">Grande</n-button>
      <n-button size="icon" aria-label="Adicionar">+</n-button>
    </div>
  `,
};

export const Disabled: Story = {
  args: { disabled: true },
};
