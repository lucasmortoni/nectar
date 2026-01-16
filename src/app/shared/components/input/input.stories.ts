import type { Meta, StoryObj } from '@storybook/angular';
import { InputComponent, InputType } from './input.component';

const meta: Meta<InputComponent> = {
  title: 'Components/Input',
  component: InputComponent,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel'] as InputType[],
      description: 'Input type',
    },
    label: {
      control: 'text',
      description: 'Input label',
    },
    placeholder: {
      control: 'text',
      description: 'Input placeholder',
    },
    hint: {
      control: 'text',
      description: 'Helper text below the input',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the input',
    },
    required: {
      control: 'boolean',
      description: 'Mark input as required',
    },
    hasError: {
      control: 'boolean',
      description: 'Show error state',
    },
    errorMessage: {
      control: 'text',
      description: 'Error message to display',
    },
  },
};

export default meta;
type Story = StoryObj<InputComponent>;

export const Default: Story = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'Enter your email',
    disabled: false,
    required: false,
    hasError: false,
  },
};

export const WithHint: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    hint: 'Must be at least 8 characters',
    disabled: false,
    required: true,
    hasError: false,
  },
};

export const WithError: Story = {
  args: {
    label: 'Username',
    type: 'text',
    placeholder: 'Enter username',
    hasError: true,
    errorMessage: 'Username is already taken',
    disabled: false,
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    type: 'text',
    placeholder: 'You cannot edit this',
    disabled: true,
    required: false,
    hasError: false,
  },
};

export const NumberInput: Story = {
  args: {
    label: 'Age',
    type: 'number',
    placeholder: 'Enter your age',
    disabled: false,
    required: true,
    hasError: false,
  },
};

export const Required: Story = {
  args: {
    label: 'Full Name',
    type: 'text',
    placeholder: 'Enter your full name',
    disabled: false,
    required: true,
    hasError: false,
  },
};
