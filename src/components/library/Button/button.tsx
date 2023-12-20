import React from 'react';
import styles from './button.module.css';
import { cn } from '~/utils/className';
import { cva } from 'class-variance-authority';
import SpinnerSvg from '~/components/library/Button/spinner.svg';

const variants = cva(
    'text-white flex flex-row items-center justify-center relative focus:outline-none rounded-md hover:bg-red-400',
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
                xs: 'h-6 text-[10px] p-4',
                sm: 'h-8 text-[14px] p-6',
                md: 'h-10 text-[16px] p-8',
                lg: 'h-14 text-[18px] p-12',
            },
            shape: {
                pill: 'rounded-3xl',
                brick: '',
                block: 'w-full',
            },
            state: {
                normal: '',
                active: '',
                disabled: 'pointer-events-none',
                loading: 'pointer-events-none',
                hover: 'hover:bg-red-400',
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
    shape?: 'pill' | 'brick' | 'block';
    loading?: boolean;
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
    className = '',
    link = '',
    loading = false,
    ...props
}) => {
    const { disabled = false } = props;

    const conditional_class = {
        uppercase: uppercase,
        'opacity-50  pointer-events-none': disabled || loading,
        'text-primary bg-white': color === 'primary' && link,
        'text-danger bg-white': color === 'danger' && link,
        'text-success bg-white': color === 'success' && link,
        'gap-4': loading,
    };

    return (
        <>
            <button
                {...props}
                title={tooltip}
                className={cn(
                    variants({ color, shape, size }),
                    conditional_class,
                    className
                )}
            >
                {loading && (
                    <div className="">
                        <SpinnerSvg className="fill-current text-white" />
                    </div>
                )}
                {children}
            </button>
        </>
    );
};

export default Button;
