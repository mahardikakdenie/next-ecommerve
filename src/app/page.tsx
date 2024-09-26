// import { Card } from '@/components/elements/Card';
import { InfiniteCarousel } from '@/components/elements/InfiniteCarousel';
import { Grid } from '@/components/main/Grid';
import {products } from '@/libs/statics';

export default function Home() {
	return (
		<div className='font-[family-name:var(--font-geist-sans)]'>
			<main className='px-10 scroll-container'>
				<Grid />
				<div className='mt-2 max-h-[200px]'>
					<div className='w-full overflow-x-auto pb-6 pt-1'>
						{products && <InfiniteCarousel products={products} />}
					</div>
				</div>
			</main>
		</div>
	);
}
