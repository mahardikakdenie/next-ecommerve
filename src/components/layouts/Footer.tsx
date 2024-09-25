import Image from 'next/image';

export const Footer = () => {
	return (
		<footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center mt-[100px]'>
			<div className='mx-auto flex w-full justify-center max-w-7xl flex-col gap-6 border-t border-neutral-200 px-6 py-12 text-sm md:flex-row md:gap-12 md:px-4 min-[1320px]:px-0 dark:border-neutral-700'>
				<a
					className='flex items-center gap-2 hover:underline hover:underline-offset-4'
					href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'>
					<Image
						aria-hidden
						src='https://nextjs.org/icons/file.svg'
						alt='File icon'
						width={16}
						height={16}
					/>
					Learn
				</a>
				<a
					className='flex items-center gap-2 hover:underline hover:underline-offset-4'
					href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'>
					<Image
						aria-hidden
						src='https://nextjs.org/icons/window.svg'
						alt='Window icon'
						width={16}
						height={16}
					/>
					Examples
				</a>
				<a
					className='flex items-center gap-2 hover:underline hover:underline-offset-4'
					href='https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'>
					<Image
						aria-hidden
						src='https://nextjs.org/icons/globe.svg'
						alt='Globe icon'
						width={16}
						height={16}
					/>
					Go to nextjs.org →
				</a>
			</div>
		</footer>
	);
};
