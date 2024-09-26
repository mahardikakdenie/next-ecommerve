'use client';
import React, { useState } from "react";

export const SelectedSize:React.FC<{ sizes: Array<string> }> = ({ sizes }) => {
    const [selectedSize, setSelectedSize] = useState('S')
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
                                onClick={() => setSelectedSize(size)}
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
