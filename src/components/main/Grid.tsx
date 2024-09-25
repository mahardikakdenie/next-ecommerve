import Image from 'next/image';
import Link from 'next/link';
import { Card } from '../elements/Card';

export const Grid = () => {
	return (
		<div className='grid sm:grid-cols-3 grid-cols-1 gap-2'>
			<div className='col-span-2'>
				<Card link='/product' cardClass=''>
					<Image
						alt='Acme Circles T-Shirt'
						src='https://i.ibb.co.com/D9DjPr9/t-shirt-1.jpg'
						fill
						className='relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105'
						priority={true}
					/>
					<div className='absolute bottom-4 flex justify-center w-full'>
						<div className='flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white'>
							<h3 className='mr-4 text-[10px] line-clamp-2 flex-grow pl-2 leading-none tracking-tight'>
								Acme Circles T-Shirt
							</h3>
							<p className='flex-none rounded-full text-[8px] bg-blue-600 px-2 text-white'>
								$20.00
								<span className='ml-1 inline lg:inline'>
									USD
								</span>
							</p>
						</div>
					</div>
				</Card>
			</div>
			<div className=''>
				<div>
					<Link
						className='relative block aspect-square h-[190px] w-full'
						href='/product/acme-geometric-circles-t-shirt'>
						<div className='group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800'>
							<Image
								alt='Acme Circles T-Shirt'
								src='https://i.ibb.co.com/D9DjPr9/t-shirt-1.jpg'
								fill
								className='relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105'
								priority={true}
							/>
							<div className='absolute bottom-4 left-0 flex justify-center w-full'>
								<div className='flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white'>
									<h3 className='mr-4 text-[10px] line-clamp-2 flex-grow pl-2 leading-none tracking-tight'>
										Acme Circles T-Shirt
									</h3>
									<p className='flex-none rounded-full text-[8px] bg-blue-600 px-2 text-white'>
										$20.00
										<span className='ml-1 inline lg:inline'>
											USD
										</span>
									</p>
								</div>
							</div>
						</div>
					</Link>
				</div>
				<div className='mt-[20px]'>
					<Link
						className='relative block aspect-square h-[190px] w-full'
						href='/product/acme-geometric-circles-t-shirt'>
						<div className='group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800'>
							<Image
								alt='Acme Circles T-Shirt'
								src='https://i.ibb.co.com/D9DjPr9/t-shirt-1.jpg'
								fill
								className='relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105'
								priority={true}
							/>
							<div className='absolute bottom-4 left-0 flex justify-center w-full'>
								<div className='flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white'>
									<h3 className='mr-4 text-[10px] line-clamp-2 flex-grow pl-2 leading-none tracking-tight'>
										Acme Circles T-Shirt
									</h3>
									<p className='flex-none rounded-full text-[8px] bg-blue-600 px-2 text-white'>
										$20.00
										<span className='ml-1 inline lg:inline'>
											USD
										</span>
									</p>
								</div>
							</div>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};
