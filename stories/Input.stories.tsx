import React from 'react';
import { Meta, Story } from '@storybook/react';
import { useArgs } from '@storybook/addons';

import { Input } from '../src';

import { IconName } from '../src/types';

interface Props {
  readonly value: string;
  readonly placeholder: string;
  readonly iconName: IconName;
  readonly disabled: boolean;
}

export default {
  title: 'Input',
  component: Input,
  args: {
    value: 'Value',
    placeholder: 'Placeholder',
    iconName: 'search',
    disabled: false,
  },
} as Meta;

export const normal: Story<Props> = ({ iconName, ...args }) => {
  const [_args, updateArgs] = useArgs();

  return (
    <Input
      {...args}
      iconProps={{ iconName }}
      onChange={(e) =>
        updateArgs({ value: (e.target as HTMLInputElement).value })
      }
    />
  );
};
