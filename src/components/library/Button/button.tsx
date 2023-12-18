import React from 'react';
import styles from './button.module.css';
import { cn } from '~/utils/className';
import { cva } from 'class-variance-authority';

const variants = cva(
    'w-full text-white flex items-center justify-center relative focus:outline-none',
    {
        variants: {
            color: {
                primary: 'bg-primary',
                secondary: 'bg-secondary',
                danger: 'bg-danger',
                warning: 'bg-warning',
                success: 'bg-success',
            },
            size: {
                sm: 'h-8 text-[14px]',
                xs: 'h-6 text-[10px]',
                md: 'h-10 text-[16px]',
                lg: 'h-14 text-[18px]',
            },
            shape: {
                pill: 'rounded-2xl',
                brick: 'block',
            },
            state: {
                normal: '',
                active: '',
                disabled: '',
                loading: '',
                hover: '',
            },
        },
        defaultVariants: {
            color: 'primary',
            shape: 'brick',
            size: 'md',
        },
    }
);

export interface IButtonProps extends React.ComponentPropsWithoutRef<'button'> {
    tooltip?: string;
    uppercase?: boolean;
    className?: string;
    color?: 'primary' | 'secondary' | 'danger' | 'warning' | 'success';
    size?: 'sm' | 'xs' | 'md' | 'lg';
    shape?: 'pill' | 'brick';
    state?: 'normal' | 'active' | 'disabled' | 'loading' | 'hover';
    children: React.ReactNode;
    link?: string;
}

const Button: React.FC<IButtonProps> = ({
    children,
    tooltip,
    uppercase,
    color = 'primary',
    size = 'md',
    shape = 'brick',
    state = 'normal',
    className = '',
    link = '',
    ...props
}) => {
    const { disabled } = props;

    const conditional_class = {
        uppercase: uppercase,
        'opacity-50 cursor-not-allowed': disabled,
        'text-primary bg-white': color === 'primary' && link,
        'text-danger bg-white': color === 'danger' && link,
        'text-success bg-white': color === 'success' && link,
    };

    return (
        <>
            <button
                {...props}
                title={tooltip}
                className={cn(
                    variants({ color, shape, size, state }),
                    conditional_class,
                    className
                )}
            >
                {children}
            </button>
        </>
    );
};

export default Button;
