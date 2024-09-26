import Image from 'next/image';
import Link from 'next/link';

export const CartModalBody = (): JSX.Element => {
	return (
		<div className='mt-5'>
			<ul className=''>
				<li className='flex w-full flex-col border-b border-neutral-300 dark:border-neutral-700'>
					<div className='relative grid grid-cols-4 px-1 py-4'>
						<div className='border border-neutral-600 rounded-lg p-2 h-[60px] w-[60px] flex justify-center items-center'>
							<Image
								src='https://i.ibb.co.com/dBvBn7m/bag-1-dark.jpg'
								alt='https://i.ibb.co.com/dBvBn7m/bag-1-dark.jpg'
								width={30}
								height={30}
								className='relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105'
								priority={true}
							/>
						</div>
						<Link
							href={'/'}
							className='z-30 flex col-span-2 w-full'>
							<div className='flex flex-1 flex-col text-base'>
								<span className='leading-tight font-bold'>
									Acme Hoodie
								</span>
								<p className='text-sm text-neutral-500 dark:text-neutral-400'>
									S
								</p>
							</div>
						</Link>
						<div className='flex h-16 flex-col justify-between'>
							<p className='flex justify-end space-y-2 text-right text-sm'>
								$20.00<span className='ml-1 inline'>USD</span>
							</p>
							<div className='ml-auto flex h-9 flex-row items-center rounded-full border border-neutral-200 dark:border-neutral-700'>
								<form>
									<button
										type='submit'
										aria-label='Reduce item quantity'
										className='ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full p-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80 ml-auto'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth='1.5'
											stroke='currentColor'
											aria-hidden='true'
											data-slot='icon'
											className='h-4 w-4 dark:text-neutral-500'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M5 12h14'></path>
										</svg>
									</button>
									<p
										aria-live='polite'
										className='sr-only'
										role='status'></p>
								</form>
								<p className='w-6 text-center'>
									<span className='w-full text-sm'>2</span>
								</p>
								<form>
									<button
										type='submit'
										aria-label='Increase item quantity'
										className='ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full p-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth='1.5'
											stroke='currentColor'
											aria-hidden='true'
											data-slot='icon'
											className='h-4 w-4 dark:text-neutral-500'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M12 4.5v15m7.5-7.5h-15'></path>
										</svg>
									</button>
									<p
										aria-live='polite'
										className='sr-only'
										role='status'></p>
								</form>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	);
};
