import { PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

interface ITypography extends PropsWithChildren {
    classname?: string;
}

export const H1: React.FC<ITypography> = ({ children, classname }) => {
    return (
        <h1 className={cn('scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance', classname)}>
            {children}
        </h1>
    );
};

export const H2: React.FC<ITypography> = ({ children, classname }) => {
    return (
        <h2 className={cn('scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0', classname)}>
            {children}
        </h2>
    );
};

export const H3: React.FC<ITypography> = ({ children, classname }) => {
    return <h3 className={cn('scroll-m-20 text-2xl font-semibold tracking-tight', classname)}>{children}</h3>;
};

export const P: React.FC<ITypography> = ({ children, classname }) => {
    return <p className={cn('leading-7 [&:not(:first-child)]:mt-6', classname)}>{children}</p>;
};

export const List: React.FC<ITypography> = ({ children, classname }) => {
    return <ul className={cn('my-6 ml-6 list-disc [&>li]:mt-2', classname)}>{children}</ul>;
};

export const Large: React.FC<ITypography> = ({ children, classname }) => {
    return <div className={cn('text-lg font-semibold', classname)}>{children}</div>;
};

export const Blockquote: React.FC<ITypography> = ({ children, classname }) => {
    return <blockquote className={cn('mt-6 border-l-2 pl-6 italic', classname)}>{children}</blockquote>;
};

export const Muted: React.FC<ITypography> = ({ children, classname }) => {
    return <p className={cn('text-muted-foreground text-sm', classname)}>{children}</p>;
};
