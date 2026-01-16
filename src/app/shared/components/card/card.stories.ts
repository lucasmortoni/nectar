import type { Meta, StoryObj } from '@storybook/angular';
import { CardComponent } from './card.component';

const meta: Meta<CardComponent> = {
  title: 'Components/Card',
  component: CardComponent,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Card title',
    },
    footer: {
      control: 'text',
      description: 'Card footer text',
    },
    shadow: {
      control: 'boolean',
      description: 'Show shadow effect',
    },
  },
};

export default meta;
type Story = StoryObj<CardComponent>;

export const Basic: Story = {
  args: {
    title: 'Card Title',
    shadow: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <app-card [title]="title" [shadow]="shadow">
        <p>This is the card content. You can place any HTML content here.</p>
      </app-card>
    `,
  }),
};

export const WithShadow: Story = {
  args: {
    title: 'Card with Shadow',
    shadow: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <app-card [title]="title" [shadow]="shadow">
        <p>This card has a shadow effect for better depth perception.</p>
      </app-card>
    `,
  }),
};

export const WithFooter: Story = {
  args: {
    title: 'Card with Footer',
    footer: 'Last updated: 2 hours ago',
    shadow: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <app-card [title]="title" [footer]="footer" [shadow]="shadow">
        <p>This card includes a footer section for additional information.</p>
      </app-card>
    `,
  }),
};

export const NoTitle: Story = {
  args: {
    shadow: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <app-card [shadow]="shadow">
        <p>Card without a title - perfect for simple content containers.</p>
      </app-card>
    `,
  }),
};
