import type { Preview } from '@storybook/web-components-vite';
import { setCustomElementsManifest } from '@storybook/web-components-vite';
import { withThemeByClassName } from '@storybook/addon-themes';

import { defineCustomElements } from '../loader/index.js';
import stencilDocs from '../custom-elements.json';
import '../src/global/global.css';
import './preview.css';

type StencilProp = {
  name: string;
  type?: string;
  docs?: string;
  default?: string;
};

type StencilComponent = {
  tag: string;
  docs?: string;
  props?: StencilProp[];
};

const docs = stencilDocs as { components: StencilComponent[] };

defineCustomElements();
setCustomElementsManifest({
  modules: [
    {
      declarations: docs.components.map(component => ({
        tagName: component.tag,
        description: component.docs,
        members: (component.props ?? [])
          .filter(prop => {
            const base = (prop.type ?? '').replace(' | undefined', '').trim();
            return base === 'boolean' || base === 'number' || base === 'string';
          })
          .map(prop => ({
            kind: 'field',
            name: prop.name,
            description: prop.docs,
            default: prop.default,
            type: { text: (prop.type ?? 'string').replace(' | undefined', '').trim() },
          })),
      })),
    },
  ],
});

const preview: Preview = {
  parameters: {
    layout: 'centered',
    backgrounds: { disable: true },
    docs: {
      source: { type: 'dynamic' },
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: '',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
  ],
};

export default preview;
