'use client';

import React, { useState } from 'react';
import { SelectedSize } from '../elements/SelectSize';

// interface ProductActionInterface {
//     // submit: (size: string) => void;
// }

export const ProductActions = ({}) => {
	const [selectedSizes, setSelectedSize] = useState('S');
	const onSubmit = (size: string) => {
		setSelectedSize(size);
	};

    const onSelectedSize = (size: string) => {
        setSelectedSize(size);
    };
	const sizes: Array<string> = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'];
	return (
		<div>
			<SelectedSize selectedSize={selectedSizes} sizes={sizes} onSelectSize={(size) => onSelectedSize(size)} />
			<div className=''>
				<button
					aria-label='Add to cart'
					className='relative flex w-full items-center justify-center rounded-full bg-blue-600 p-4 tracking-wide text-white hover:opacity-90'
					onClick={() => onSubmit('halo')}>
					<div className='absolute left-0 ml-4'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='currentColor'
							aria-hidden='true'
							data-slot='icon'
							className='h-5'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M12 4.5v15m7.5-7.5h-15'></path>
						</svg>
					</div>
					Add To Cart
				</button>
				<p aria-live='polite' className='sr-only' role='status'></p>
			</div>
		</div>
	);
};
