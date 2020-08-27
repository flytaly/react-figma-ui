import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Icon } from '../src';

import { IconName, ColorName } from '../src/types';

interface Props {
  readonly iconName: IconName;
  readonly iconColor: ColorName;
  readonly spin: boolean;
  readonly value: string;
}

export default {
  title: 'Icon',
  component: Icon,
  args: {
    iconName: 'blend',
    spin: false,
    value: '',
  },
} as Meta;

export const normal: Story<Props> = ({ value, ...args }) => (
  <Icon {...args}>{value}</Icon>
);
