import React, { HTMLProps } from 'react';
interface Props extends Omit<Readonly<HTMLProps<HTMLInputElement>>, 'onChange'> {
    readonly containerProps?: Readonly<HTMLProps<HTMLDivElement>>;
    readonly labelProps?: Readonly<HTMLProps<HTMLLabelElement>>;
    readonly onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare const Radio: ({ children, id, className, containerProps, labelProps, ...props }: Props) => JSX.Element;
export {};
