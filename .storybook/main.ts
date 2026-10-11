import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.ts'],
  addons: ['@storybook/addon-a11y', '@storybook/addon-themes'],
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  core: {
    disableTelemetry: true,
  },
  async viteFinal(config, { configType }) {
    if (configType !== 'DEVELOPMENT') return config;

    const ignored = config.server?.watch?.ignored;
    const previous = Array.isArray(ignored) ? ignored : ignored ? [ignored] : [];

    config.build = { ...config.build, outDir: 'dist-vite' };
    config.server = {
      ...config.server,
      watch: {
        ...config.server?.watch,
        // O build do Stencil escreve em dist/ e loader/, que o Vite ignora por padrão.
        ignored: [...previous.filter(entry => typeof entry === 'string'), '!**/loader/**', '!**/dist/**'],
      },
    };

    return config;
  },
};

export default config;
