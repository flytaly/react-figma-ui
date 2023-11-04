import { HTMLProps, ReactElement, DetailedHTMLProps, LiHTMLAttributes } from 'react';
interface DisclosureProps<T> extends Readonly<HTMLProps<HTMLUListElement>> {
    readonly items: T[];
    render(...itemData: [T, number, T[]]): ReactElement;
}
interface DisclosureItemProps extends Readonly<DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>> {
    readonly heading: string;
    readonly content: string;
    readonly section?: boolean;
    readonly expanded?: boolean;
    readonly labelProps?: Readonly<HTMLProps<HTMLDivElement>>;
    readonly contentProps?: Readonly<HTMLProps<HTMLDivElement>>;
}
export declare function Disclosure<T extends object>({ items, render, className, ...props }: DisclosureProps<T>): JSX.Element;
export declare const DisclosureItem: ({ section, expanded, heading, content, className, labelProps, contentProps, ...props }: DisclosureItemProps) => JSX.Element;
export {};
