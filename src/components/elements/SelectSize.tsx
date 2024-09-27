'use client';
interface SelectedSizeInterface {
	sizes: Array<string>;
	selectedSize: string;
	onSelectSize: (size: string) => void;
}

export const SelectedSize: React.FC<SelectedSizeInterface> = ({
	sizes,
	selectedSize,
	onSelectSize,
}) => {
	return (
		<dl className='mb-8'>
			<dt className='mb-4 text-sm uppercase tracking-wide'>Size</dt>
			<dd className='flex flex-wrap gap-3'>
				{sizes &&
					sizes.map((size) => {
						return (
							<button
								key={size}
								aria-disabled='false'
								title={size}
								onClick={() => onSelectSize(size)}
								className={`flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:bg-neutral-900 ring-1 ring-transparent transition duration-300 ease-in-out hover:ring-blue-600 ${
									selectedSize === size
										? 'dark:border-blue-600'
										: 'dark:border-neutral-800'
								}`}>
								{size}
							</button>
						);
					})}
			</dd>
		</dl>
	);
};
