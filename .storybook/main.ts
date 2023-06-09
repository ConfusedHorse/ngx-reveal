import type { StorybookConfig } from "@storybook/angular";

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.ts'],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: '@storybook/angular',
    options: {
      enableIvy: true
    }
  },
  docs: {
    autodocs: "tag",
  },
  core: {
    disableTelemetry: true
  },
};

export default config;
