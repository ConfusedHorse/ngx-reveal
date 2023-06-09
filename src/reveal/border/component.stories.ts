import { Meta, StoryObj } from '@storybook/angular';
import { RevealBorderComponent } from "./component";

const meta: Meta<RevealBorderComponent> = {
  title: "Reveal/Border",
  component: RevealBorderComponent
};

export default meta;
type Story = StoryObj<RevealBorderComponent>;

export const TextContent: Story = {
  render: () => ({
    styles: [
      `reveal-border {
        color: #FFF;
        padding: 1em;
        pointer-events: none
      }`
    ],
    template: `
      <reveal-border>This is a test border</reveal-border>
    `
  }),
};

export const Colored: Story = {
  render: () => ({
    styles: [
      `reveal-border {
        padding: 1em;
        --reveal-color: red;
      }`
    ],
    template: `
      <reveal-border></reveal-border>
    `
  }),
};

export const InvisibleGrid: Story = {
  render: () => ({
    props: {
      grid: Array(400).fill(0)
    },
    styles: [
      `:host {
        display: grid;
        grid-template-columns: repeat(20, minmax(2em, 1fr));
        grid-template-rows: repeat(20, minmax(2em, 1fr));
        gap: .25em;
      }`,
      `reveal-border {
        border-color: transparent;
      }`
    ],
    template: `
      <reveal-border *ngFor="let i of grid" [maskSize]="300"></reveal-border>
    `
  }),
};
