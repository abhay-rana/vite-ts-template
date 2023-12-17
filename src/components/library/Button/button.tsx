import React from 'react';
// import styles from './button.module.css';
import { cn } from '~/utils/className';
import { cva } from 'class-variance-authority';

const variants = cva('border w-full', {
    variants: {
        color: {
            primary: 'bg-white border-zinc-150',
            secondary: 'bg-black border-zinc-100',
            danger: 'bg-black border-zinc-100',
            warning: 'bg-black border-zinc-100',
            success: 'bg-black border-zinc-100',
        },
    },
    defaultVariants: {
        color: 'primary',
    },
});

export interface IButtonProps extends React.ComponentPropsWithoutRef<'button'> {
    tooltip?: string;
    uppercase?: boolean;
    className?: string;
    color?: 'primary' | 'secondary' | 'danger' | 'warning' | 'success';
    size?: 'sm' | 'xs' | 'md' | 'lg';
    shape?: 'pill' | 'brick';
    state?: 'normal' | 'active' | 'disabled' | 'loading' | 'hover';
}

const Button: React.FC<IButtonProps> = ({
    children,
    tooltip,
    color = 'primary',
    size = 'md',
    shape = 'brick',
    state = 'normal',
    className = '',
    ...props
}) => {
    return (
        <>
            <button
                {...props}
                title={tooltip}
                className={cn(variants({ color, className }))}
            >
                {children}
            </button>
        </>
    );
};

export default Button;
