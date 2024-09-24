import Link from 'next/link';
import LogoSquare from '../LogoArea';

export const Navbar = () => {
	const SITE_NAME = 'NS THEME';
	return (
		<nav className='relative grid grid-cols-3 p-4 lg:px-6 w-full'>
			<div className='block flex-none'>
				<div className='flex w-full items-center'>
					<div className='flex w-full'>
						<Link
							href='/'
							prefetch={true}
							className='mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6'>
							<LogoSquare />
							<div className='ml-2 flex-none text-white text-sm font-bold uppercase md:hidden lg:block'>
								{SITE_NAME}
							</div>
						</Link>
						<div className='flex items-center gap-4'>
							<div>
								<span className='text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300 text-sm cursor-pointer'>
									All
								</span>
							</div>
							<div>
								<span className='text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300 text-sm cursor-pointer'>
									Shirt
								</span>
							</div>
							<div>
								<span className='text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300 text-sm cursor-pointer'>
									Baju
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='flex justify-center w-full items-center'>
				<div className='w-full relative'>
					<input
						type='text'
						placeholder='Search For Products ...'
						className='text-md w-full rounded-lg border bg-white px-10 py-2 text-black placeholder:text-neutral-500 md:text-sm dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400'
					/>
					<div className='absolute right-0 top-0 mr-3 flex h-full items-center'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='20'
							height='20'
							viewBox='0 0 24 24'>
							<path
								fill='currentColor'
								d='m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14'
							/>
						</svg>
					</div>
				</div>
			</div>
			<div className='w-full flex justify-end items-center'>
				<button className='border border-neutral-600 rounded-md py-3 px-6 hover:bg-slate-800'>
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
		</nav>
	);
};
