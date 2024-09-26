'use client';
import { useState } from 'react';
import { HeaderCartModal } from './header';
import { CartModalLayout } from './layout';
import { CartModalBody } from './body';


export const CartModal = () => {
	const [isModalVisible, setIsModalVisible] = useState(false);
	return (
		<>
			<div className='w-full flex justify-end items-center'>
				<button className='border border-neutral-600 rounded-md py-3 px-6 hover:bg-slate-800' onClick={() => setIsModalVisible(true)}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='1em'
						height='1em'
						viewBox='0 0 24 24'>
						<path
							fill='currentColor'
							d='M16 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m-9-1a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1M18 6H4.27l2.55 6H15c.33 0 .62-.16.8-.4l3-4c.13-.17.2-.38.2-.6a1 1 0 0 0-1-1m-3 7H6.87l-.77 1.56L6 15a1 1 0 0 0 1 1h11v1H7a2 2 0 0 1-2-2a2 2 0 0 1 .25-.97l.72-1.47L2.34 4H1V3h2l.85 2H18a2 2 0 0 1 2 2c0 .5-.17.92-.45 1.26l-2.91 3.89c-.36.51-.96.85-1.64.85'
						/>
					</svg>
				</button>
			</div>
			{/*  */}
			{isModalVisible && (
			<CartModalLayout>
				<HeaderCartModal close={() => setIsModalVisible(false)} />
				<CartModalBody />
			</CartModalLayout>)}
		</>
	);
};
