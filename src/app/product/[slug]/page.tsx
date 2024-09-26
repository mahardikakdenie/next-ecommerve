import Image from 'next/image';
import { SelectedSize } from '@/components/elements/SelectSize';

const ProductDetail = () => {
	const sizes: Array<string> = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'];
	return (
		<div className='px-10 py-10'>
			<div className='bg-black border rounded-lg p-6 border-neutral-600 w-[90%] mx-auto'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
					{/* Image Section */}
					<div className=''>
						<Image
							alt='Acme Circles T-Shirt'
							src='https://i.ibb.co.com/D9DjPr9/t-shirt-1.jpg'
							width={500}
							height={500}
							className='h-auto w-auto object-contain transition duration-300 ease-in-out group-hover:scale-105'
							priority={true}
						/>

						<div className='grid grid-cols-3 gap-3 px-10'>
							{[0, 1, 2].map((i) => {
								return (
									<div className='border rounded-lg p-3 border-neutral-600 cursor-pointer hover:border-blue-600'>
										<Image
											alt='Acme Circles T-Shirt'
											src='https://i.ibb.co.com/D9DjPr9/t-shirt-1.jpg'
											width={60}
											height={60}
											className='h-auto w-auto mx-auto object-contain transition duration-300 ease-in-out group-hover:scale-105'
											priority={true}
										/>
									</div>
								);
							})}
						</div>
					</div>
					{/* Product Info Section */}
					<div className='basis-full lg:basis-2/6 my-auto'>
						<div className='mb-6 flex flex-col border-b pb-6 dark:border-neutral-700'>
							<h1 className='mb-2 text-5xl font-medium'>
								Acme Hoodie
							</h1>
							<div className='mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white'>
								<p>
									$50.00
									<span className='ml-1 inline'>USD</span>
								</p>
							</div>
						</div>
							<SelectedSize sizes={sizes} />
						<div className='prose mx-auto max-w-6xl text-black prose-headings:mt-8 prose-headings:font-semibold prose-headings:tracking-wide prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg prose-a:text-black prose-a:underline hover:prose-a:text-neutral-300 prose-strong:text-black prose-ol:mt-8 prose-ol:list-decimal prose-ol:pl-6 prose-ul:mt-8 prose-ul:list-disc prose-ul:pl-6 dark:text-white dark:prose-headings:text-white dark:prose-a:text-white dark:prose-strong:text-white mb-6 text-sm leading-tight dark:text-white/[60%]'>
							Fabric blend of Supima Cotton and Micromodal.
						</div>
						<form className=''>
							<button
								aria-label='Add to cart'
								className='relative flex w-full items-center justify-center rounded-full bg-blue-600 p-4 tracking-wide text-white hover:opacity-90'>
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
							<p
								aria-live='polite'
								className='sr-only'
								role='status'></p>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetail;
