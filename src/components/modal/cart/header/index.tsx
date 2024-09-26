interface Header {
    close: () => void;
}
export const HeaderCartModal: React.FC<Header> = ({close}) => {
	return (
		<div className='flex justify-between pb-6'>
			<div>
				<span className='text-md font-bold'>My Cart</span>
			</div>
			<div className='flex items-center'>
				<button className='border border-neutral-600 px-6 py-1 rounded-md hover:bg-slate-700' onClick={close}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='18px'
						height='18px'
						viewBox='0 0 24 24'
                    >
						<path
							fill='currentColor'
							d='M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z'
						/>
					</svg>
				</button>
			</div>
		</div>
	);
};
