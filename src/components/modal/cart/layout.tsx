import React from "react";
import CartModalStyles from '@/components/modal/cart/layout.module.scss';

interface CartModalLayoutInterface {
    children: React.ReactNode,
};

export const CartModalLayout: React.FC<CartModalLayoutInterface> = ({ children }): JSX.Element => {
    return (
        <div className={CartModalStyles['modal-cart']}>
            {children}
        </div>
    );
};
