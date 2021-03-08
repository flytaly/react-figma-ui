import React, { HTMLProps } from 'react';
import sTrimmer from 's-trimmer';

import { Icon, Props as IconProps } from './Icon';

interface Props extends Readonly<HTMLProps<HTMLDivElement>> {
  readonly containerProps?: Readonly<HTMLProps<HTMLDivElement>>;
  readonly iconProps: IconProps;
}

export const Onboarding = ({
  children,
  className = '',
  containerProps = {},
  iconProps,
  ...props
}: Props) => {
  const {
    className: containerClassName = '',
    ...containerRest
  } = containerProps;
  const { style: iconStyle = {}, ...iconRest } = iconProps;

  return (
    <div
      {...containerRest}
      className={sTrimmer(`onboarding-tip ${containerClassName}`)}
    >
      <Icon {...iconRest} style={{ minWidth: 32, ...iconStyle }} />

      <div {...props} className={sTrimmer(`onboarding-tip__msg ${className}`)}>
        {children}
      </div>
    </div>
  );
};
