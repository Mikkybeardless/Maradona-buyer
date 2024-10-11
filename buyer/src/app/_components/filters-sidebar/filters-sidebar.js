import { ArrowRight2 } from 'iconsax-react';
import Image from 'next/image';

export default function FiltersSidebar() {
	return (
		<aside className='w-full lg:w-1/5 rounded-lg'>
			{/* Categories */}
			<div className='mb-6 rounded-lg  bg-white'>
				<header className='bg-foundation-orange mb-2 rounded-t-lg text-white p-3'>
					<h3 className='font-medium text-sm'>Categories</h3>
				</header>
				<ul className='space-y-2 p-3'>
					<button className='flex items-center text-sm text-[#585858] w-full justify-between'>
						<Image src={'/images/vehicle.svg'} width={40} height={40} alt='' />
						Vehicles
						<ArrowRight2 />
					</button>
					<button className='flex items-center text-sm text-[#585858] w-full justify-between'>
						<Image src={'/images/vehicle.svg'} width={40} height={40} alt='' />
						Houses
						<ArrowRight2 />
					</button>
					<button className='flex items-center text-sm text-[#585858] w-full justify-between'>
						<Image src={'/images/vehicle.svg'} width={40} height={40} alt='' />
						Lands
						<ArrowRight2 />
					</button>
				</ul>
			</div>

			{/* Location */}
			<div className='mb-6 p-3 bg-white rounded-lg flex items-center justify-between'>
				<div>
					<h3 className='font-medium text-sm mb-1'>Location</h3>
					<p className='text-[#585858] text-sm'>Nigeria</p>
				</div>
				<ArrowRight2 />
			</div>

			{/* Price Range */}
			<div className='mb-6 bg-white p-3'>
				<h3 className='font-semibold text-lg mb-2'>Price N</h3>
				<div className='flex space-x-2'>
					<input type='number' placeholder='Min' className='border p-2 rounded-md w-1/2' />
					<input type='number' placeholder='Max' className='border p-2 rounded-md w-1/2' />
				</div>
				<ul className='space-y-2 mt-2'>
					<li>
						<input type='radio' name='discount' id='15m' />
						<label htmlFor='15m' className='ml-2'>
							Under 15M - 239 ads
						</label>
					</li>
					<li>
						<input type='radio' name='discount' id='70M' />
						<label htmlFor='70M' className='ml-2'>
							15 to 70M - 956 ads
						</label>
					</li>
					<li>
						<input type='radio' name='discount' id='180M' />
						<label htmlFor='180M' className='ml-2'>
							70 to 180M - 1594 ads
						</label>
					</li>
					<li>
						<input type='radio' name='discount' id='460M' />
						<label htmlFor='460M' className='ml-2'>
							180 to 460M - 996 ads
						</label>
					</li>
					<li>
						<input type='radio' name='discount' id='more' />
						<label htmlFor='more' className='ml-2'>
							More than 460M - 199 ads
						</label>
					</li>
				</ul>
			</div>

			{/* Discount */}
			<div className='mb-6 p-3 bg-white'>
				<h3 className='font-semibold text-lg mb-2'>Discount</h3>
				<ul className='space-y-2'>
					<li>
						<input type='radio' name='discount' id='all' />
						<label htmlFor='all' className='ml-2'>
							Show all
						</label>
					</li>
					<li>
						<input type='radio' name='discount' id='with-discount' />
						<label htmlFor='with-discount' className='ml-2'>
							With discount - 10 ads
						</label>
					</li>
					<li>
						<input type='radio' name='discount' id='without-discount' />
						<label htmlFor='without-discount' className='ml-2'>
							Without discount - 1000 ads
						</label>
					</li>
				</ul>
			</div>

			{/* Listing Type */}
			<div className='p-3 bg-white'>
				<h3 className='font-semibold text-lg mb-2'>Listing Type</h3>
				<ul className='space-y-2'>
					<li>
						<input type='radio' name='listing' id='for-sale' />
						<label htmlFor='for-sale' className='ml-2'>
							For Sale
						</label>
					</li>
					<li>
						<input type='radio' name='listing' id='auction' />
						<label htmlFor='auction' className='ml-2'>
							Auction
						</label>
					</li>
					<li>
						<input type='radio' name='listing' id='foreclosure' />
						<label htmlFor='foreclosure' className='ml-2'>
							Foreclosure
						</label>
					</li>
				</ul>
			</div>
		</aside>
	);
}
