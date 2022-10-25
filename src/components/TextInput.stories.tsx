/* eslint-disable react/jsx-key */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Meta, StoryObj } from '@storybook/react';
import { Envelope } from 'phosphor-react';
import { TextInput, TextInputRootProps } from './TextInput';

export default {
  title: 'Components/TextInput',
  component: TextInput.TextInputRoot,
  args: {
    children: [
      <TextInput.TextInputIcon>
        <Envelope />
      </TextInput.TextInputIcon>,
      <TextInput.TextInputInput placeholder='Type your e-mail address' />
    ]
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {}

export const WithoutIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: <TextInput.TextInputInput placeholder='Type your e-mail address' />
  }
}
