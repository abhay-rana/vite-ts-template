import React from 'react';
import { cn } from '~/utils/className';

interface IRippleEffect {
    children: React.ReactNode;
    loading?: boolean;
    disabled?: boolean;
    icon_button?: boolean;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const RippleEffect: React.FC<IRippleEffect> = ({
    children,
    loading,
    disabled,
    icon_button,
    onClick,
}) => {
    function createRipple(event: React.MouseEvent<HTMLDivElement>) {
        if (loading || disabled) {
            return;
        }
        // * currentTarget returns the which node listen for that event currently
        const button = event.currentTarget;

        // creating the span element directly
        const circle = document.createElement('span');
        const diameter = Math.max(button.clientWidth, button.clientHeight);

        if (!icon_button) {
            // get the position of the click with respect to the button element
            circle.style.width = circle.style.height = `${diameter / 2}px`;
            circle.style.left = `${event.clientX - button.offsetLeft}px`;
            circle.style.top = `${event.clientY - button.offsetTop}px`;
        } else {
            //if this is icon_button so the ripple always start from the center of the element
            const client_rect = button.getBoundingClientRect();

            circle.style.height = `${client_rect.height}px`;
            circle.style.width = `${client_rect.width}px`;
            circle.style.left = `${client_rect.width / 2}px`;
            circle.style.top = `${client_rect.height / 2}px`;
        }

        //adding the ripple animation class
        circle.classList.add('custom_ripple');

        const ripple = button.getElementsByClassName('custom_ripple')[0];

        // ** on click in the button it removes the old ripple and append the new ripple and the new animation is rendering
        //remove the span ripple is there is already there so we start the animation from the beginning
        if (ripple) {
            ripple.remove();
        }

        //append the span ripple in the DOM
        button.appendChild(circle);

        // perform the onClick callback function
        onClick && onClick(event);
    }

    return (
        <>
            <div onClick={createRipple} className={cn('custom_btn', 'w-max')}>
                {children}
            </div>
        </>
    );
};

export default RippleEffect;
