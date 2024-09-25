import Image from "next/image";
import { Card } from "./Card";
import { Product } from "@/libs/statics";

export const InfiniteCarousel: React.FC<{ products: Array<Product> }> = ({ products }) => {
    // To make Infinite
    const carouselProducts = [...products, ...products, ...products];
	return (
		<ul className='p-4 animate-carousel flex gap-4'>
			{carouselProducts.map((product: Product | null, index: number) => {
				return (
					<li
						key={index}
						className='relative aspect-square w-1/6 max-w-[475px] flex-none'>
						<Card
							link={`/product/${product?.link}`}
							cardClass='w-[400px] h-[200px] relative'>
							{product && (
								<Image
									src={product.image}
									alt={product?.name}
									fill
									className='relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105'
									priority={true}
								/>
							)}
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
					</li>
				);
			})}
		</ul>
	);
};
