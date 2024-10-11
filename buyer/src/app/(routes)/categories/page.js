'use client';

import Image from 'next/image';
import blueToyota from '@/app/_assets/images/blue-toyota.png';
import blackLexus from '@/app/_assets/images/black-lexus.png';
import FiltersSidebar from '@/app/_components/filters-sidebar/filters-sidebar';
import ProductCard from '@/app/_components/product-card/product-card';
import SortAndViewOptions from '@/app/_components/sort-and-view-options/sort-and-view-options';
import { Grid1, Grid3 } from 'iconsax-react';

export default function Page() {
	const products = [
		{
			id: 1,
			title: 'Toyota Tacoma Access Cab 2006 Blue',
			price: '₦ 1,750,000',
			location: 'Ikoyi, Lagos',
			image: '/images/black-lexus.png',
		},
		{
			id: 1,
			title: 'Toyota Tacoma Access Cab 2006 Blue',
			price: '₦ 1,750,000',
			location: 'Ikoyi, Lagos',
			image: '/images/black-lexus.png',
		},
		{
			id: 1,
			title: 'Toyota Tacoma Access Cab 2006 Blue',
			price: '₦ 1,750,000',
			location: 'Ikoyi, Lagos',
			image: '/images/black-lexus.png',
		},
		{
			id: 1,
			title: 'Toyota Tacoma Access Cab 2006 Blue',
			price: '₦ 1,750,000',
			location: 'Ikoyi, Lagos',
			image: '/images/black-lexus.png',
		},
		{
			id: 1,
			title: 'Toyota Tacoma Access Cab 2006 Blue',
			price: '₦ 1,750,000',
			location: 'Ikoyi, Lagos',
			image: '/images/black-lexus.png',
		},
		{
			id: 1,
			title: 'Toyota Tacoma Access Cab 2006 Blue',
			price: '₦ 1,750,000',
			location: 'Ikoyi, Lagos',
			image: '/images/black-lexus.png',
		},
		{
			id: 1,
			title: 'Toyota Tacoma Access Cab 2006 Blue',
			price: '₦ 1,750,000',
			location: 'Ikoyi, Lagos',
			image: '/images/black-lexus.png',
		},
		{
			id: 1,
			title: 'Toyota Tacoma Access Cab 2006 Blue',
			price: '₦ 1,750,000',
			location: 'Ikoyi, Lagos',
			image: '/images/black-lexus.png',
		},
		{
			id: 1,
			title: 'Toyota Tacoma Access Cab 2006 Blue',
			price: '₦ 1,750,000',
			location: 'Ikoyi, Lagos',
			image: '/images/black-lexus.png',
		},
		{
			id: 1,
			title: 'Toyota Tacoma Access Cab 2006 Blue',
			price: '₦ 1,750,000',
			location: 'Ikoyi, Lagos',
			image: '/images/black-lexus.png',
		},
		{
			id: 1,
			title: 'Toyota Tacoma Access Cab 2006 Blue',
			price: '₦ 1,750,000',
			location: 'Ikoyi, Lagos',
			image: '/images/black-lexus.png',
		},
		{
			id: 1,
			title: 'Toyota Tacoma Access Cab 2006 Blue',
			price: '₦ 1,750,000',
			location: 'Ikoyi, Lagos',
			image: '/images/black-lexus.png',
		},
		{
			id: 1,
			title: 'Toyota Tacoma Access Cab 2006 Blue',
			price: '₦ 1,750,000',
			location: 'Ikoyi, Lagos',
			image: '/images/black-lexus.png',
		},
	];
	<div className='flex justify-between items-center mb-6'>
		<div>
			<label className='mr-2'>Sort by:</label>
			<select className='p-2 border rounded-lg'>
				<option value='recommended'>Recommended</option>
				<option value='latest'>Latest</option>
			</select>
		</div>

		<div className='flex space-x-4'>
			<button>
				<Grid1 size='24' color='gray' />
			</button>
			<button>
				<Grid3 size='24' color='gray' />
			</button>
		</div>
	</div>;
	return (
		<>
			{/* <section className='mx-auto w-10/12 max-w-[75rem]'></section> */}
			<div className='bg-gray-100 min-h-screen'>
				<div className='max-w-7xl mx-auto py-8'>
					<div className='flex'>
						{/* Sidebar */}
						<FiltersSidebar />

						{/* Main Content */}
						<div className='flex-1 ml-6'>
							{/* Sort and View Options */}
							<SortAndViewOptions />

							{/* Product Grid */}
							<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
								{products.map((product) => (
									<ProductCard key={product.id} product={product} />
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
