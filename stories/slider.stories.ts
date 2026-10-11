import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

type SliderArgs = {
  value: number;
  min: number;
  max: number;
  step: number;
  orientation: 'horizontal' | 'vertical';
  disabled: boolean;
};

const meta = {
  title: 'Forms/Slider',
  component: 'n-slider',
  tags: ['autodocs'],
  args: {
    value: 40,
    min: 0,
    max: 100,
    step: 1,
    orientation: 'horizontal',
    disabled: false,
  },
  argTypes: {
    orientation: { control: 'inline-radio', options: ['horizontal', 'vertical'] },
  },
  render: ({ value, min, max, step, orientation, disabled }) => html`
    <div style=${orientation === 'vertical' ? 'height: 11rem' : 'width: 16rem'}>
      <n-slider
        name="volume"
        value=${value}
        min=${min}
        max=${max}
        step=${step}
        orientation=${orientation}
        ?disabled=${disabled}
      ></n-slider>
    </div>
  `,
} satisfies Meta<SliderArgs>;

export default meta;
type Story = StoryObj<SliderArgs>;

export const Default: Story = {};

export const Vertical: Story = {
  args: { orientation: 'vertical' },
};

export const Disabled: Story = {
  args: { disabled: true },
};
