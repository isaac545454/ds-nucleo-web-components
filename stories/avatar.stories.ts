import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

type AvatarArgs = {
  src: string;
  alt: string;
  fallback: string;
};

const meta = {
  title: 'Feedback/Avatar',
  component: 'n-avatar',
  tags: ['autodocs'],
  args: {
    src: '',
    alt: 'Ada Lovelace',
    fallback: 'AL',
  },
  render: ({ src, alt, fallback }) => html`<n-avatar src=${src} alt=${alt} fallback=${fallback}></n-avatar>`,
} satisfies Meta<AvatarArgs>;

export default meta;
type Story = StoryObj<AvatarArgs>;

export const Fallback: Story = {};

export const Image: Story = {
  args: {
    src: 'https://i.pravatar.cc/80?img=5',
    alt: 'Retrato',
  },
};
