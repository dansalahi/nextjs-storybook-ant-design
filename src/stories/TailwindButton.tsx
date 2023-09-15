import React, { FC } from 'react';
import { Meta, Story } from '@storybook/react';
import AppTailwindButton, { AppTailwindButtonProps } from '../components/AppTailwindButton';
import { purple } from '@ant-design/colors';

export default {
  title: 'Buttons/Side by Side',
  component: AppTailwindButton,
  argTypes: {
    children: {
      control: 'text',
      defaultValue: 'Button Text',
    },
    size: {
      control: {
        type: 'select',
        options: ['xs', 'sm', 'md', 'lg', 'xl'],
      },
      defaultValue: 'md',
    },
  },
} as Meta;

const Template: Story<AppTailwindButtonProps> = (args) => (
  <div style={{ display: 'flex', gap: '16px' }}>
    <AppTailwindButton {...args} />
    <AppTailwindButton {...args} />
  </div>
);

export const TwoButtonsSideBySide: FC<AppTailwindButtonProps> = (args) => (
  <div style={{ display: 'flex', gap: '30px' }}>
    <div className='flex gap-2'>
      <AppTailwindButton {...args} corner='simple' color={purple.primary} >button / 02</AppTailwindButton>
      <AppTailwindButton {...args} corner='simple' >+</AppTailwindButton>
    </div>
    <div className='flex gap-2'>
      <AppTailwindButton {...args} corner='round' >button / 02</AppTailwindButton>
      <AppTailwindButton {...args} corner='round' >+</AppTailwindButton>
    </div>
    <div className='flex gap-2'>
      <AppTailwindButton {...args} corner='circle' >button / 02</AppTailwindButton>
      <AppTailwindButton {...args} corner='circle' >+</AppTailwindButton>
    </div>
  </div>
);
