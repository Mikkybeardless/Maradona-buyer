import { Location } from 'iconsax-react';
import Image from 'next/image';

export default function RecentListings() {
	return (
		<section>
			<header className='mb-8'>
				<h1 className='text-[#040421] font-semibold text-3xl'>Recent Listings</h1>
			</header>
			<div className='flex items-start mb-7 justify-between gap-5'>
				<section className='px-0 py-6 grid grid-cols-2 place-items-center gap-y-6 bg-[#FAFAFA] rounded-lg'>
					<div className='space-y-2.5 text-center w-fit'>
						<div className='mx-auto w-[8.5625rem] h-[7.6875rem] bg-[#D9D9D9] rounded-lg grid place-items-center'>
							<Image src='/images/camry.png' width={134} height={120} alt='' className='rounded-lg' />
						</div>
						<div className='text-center space-y-1'>
							<p className='text-foundation-orange text-sm font-medium'>₦10,500,000</p>
							<p className='text-[#454545] text-sm'>2023 Toyota Camry XLE</p>
							<div className='flex w-fit mx-auto items-center gap-1.5'>
								<Location color='#E65800' size={24} />
								<span className='text-[#454545]'>Lekki, Lagos</span>
							</div>
						</div>
					</div>
					<div className='space-y-2.5 text-center w-fit'>
						<div className='mx-auto w-[8.5625rem] h-[7.6875rem] bg-[#D9D9D9] rounded-lg grid place-items-center'>
							<Image src='/images/camry.png' width={134} height={120} alt='' className='rounded-lg' />
						</div>
						<div className='text-center space-y-1'>
							<p className='text-foundation-orange text-sm font-medium'>₦4,200,000</p>
							<p className='text-[#454545] text-sm'>2018 Honda Accord</p>
							<div className='flex w-fit mx-auto items-center gap-1.5'>
								<Location color='#E65800' size={24} />
								<span className='text-[#454545]'>Lekki, Lagos</span>
							</div>
						</div>
					</div>
					<div className='space-y-2.5 text-center w-fit'>
						<div className='mx-auto w-[8.5625rem] h-[7.6875rem] bg-[#D9D9D9] rounded-lg grid place-items-center'>
							<Image src='/images/camry.png' width={134} height={120} alt='' className='rounded-lg' />
						</div>
						<div className='text-center space-y-1'>
							<p className='text-foundation-orange text-sm font-medium'>₦4,200,000</p>
							<p className='text-[#454545] text-sm'>2018 Honda Accord</p>
							<div className='flex w-fit mx-auto items-center gap-1.5'>
								<Location color='#E65800' size={24} />
								<span className='text-[#454545]'>Lekki, Lagos</span>
							</div>
						</div>
					</div>
					<div className='space-y-2.5 text-center w-fit'>
						<div className='mx-auto w-[8.5625rem] h-[7.6875rem] bg-[#D9D9D9] rounded-lg grid place-items-center'>
							<Image src='/images/camry.png' width={134} height={120} alt='' className='rounded-lg' />
						</div>
						<div className='text-center space-y-1'>
							<p className='text-foundation-orange text-sm font-medium'>₦30,000,000</p>
							<p className='text-[#454545] text-sm'>2021 Range Rover Sport</p>
							<div className='flex w-fit mx-auto items-center gap-1.5'>
								<Location color='#E65800' size={24} />
								<span className='text-[#454545]'>Maitama, Abuja</span>
							</div>
						</div>
					</div>
				</section>
				<section className='px-0 py-6 grid grid-cols-3 place-items-center gap-y-6 bg-[#FAFAFA] rounded-lg'>
					<div className='space-y-2.5 text-center w-fit'>
						<div className='mx-auto w-[9.8125rem] h-[7.6875rem] bg-[#D9D9D9] rounded-lg grid place-items-center'>
							<Image src='/images/house-listing.png' width={157} height={123} alt='' className='rounded-lg' />
						</div>
						<div className='text-center space-y-1'>
							<p className='text-[#454545] text-sm'>5-Bedroom Detached House</p>
							<p className='text-foundation-orange text-sm font-medium'>₦250,000,000</p>
							<div className='flex w-fit mx-auto items-center gap-1.5'>
								<Location color='#E65800' size={24} />
								<span className='text-[#454545]'>Ikoyi, Lagos</span>
							</div>
						</div>
					</div>
					<div className='space-y-2.5 text-center w-fit'>
						<div className='mx-auto w-[9.8125rem] h-[7.6875rem] bg-[#D9D9D9] rounded-lg grid place-items-center'>
							<Image src='/images/house-listing.png' width={157} height={123} alt='' className='rounded-lg' />
						</div>
						<div className='text-center space-y-1'>
							<p className='text-[#454545] text-sm'>3-Bedroom Apartment</p>
							<p className='text-foundation-orange text-sm font-medium'>₦45,000,000</p>
							<div className='flex w-fit mx-auto items-center gap-1.5'>
								<Location color='#E65800' size={24} />
								<span className='text-[#454545]'>Wuse 2, Abuja</span>
							</div>
						</div>
					</div>
					<div className='space-y-2.5 text-center w-fit'>
						<div className='mx-auto w-[9.8125rem] h-[7.6875rem] bg-[#D9D9D9] rounded-lg grid place-items-center'>
							<Image src='/images/house-listing.png' width={157} height={123} alt='' className='rounded-lg' />
						</div>
						<div className='text-center space-y-1'>
							<p className='text-[#454545] text-sm'>4-Bedroom Luxury Villa</p>
							<p className='text-foundation-orange text-sm font-medium'>₦180,000,000</p>
							<div className='flex w-fit mx-auto items-center gap-1.5'>
								<Location color='#E65800' size={24} />
								<span className='text-[#454545]'>Lekki, Lagos</span>
							</div>
						</div>
					</div>
					<div className='space-y-2.5 text-center w-fit'>
						<div className='mx-auto w-[9.8125rem] h-[7.6875rem] bg-[#D9D9D9] rounded-lg grid place-items-center'>
							<Image src='/images/house-listing.png' width={157} height={123} alt='' className='rounded-lg' />
						</div>
						<div className='text-center space-y-1'>
							<p className='text-[#454545] text-sm'>5-Bedroom Detached House</p>
							<p className='text-foundation-orange text-sm font-medium'>₦250,000,000</p>
							<div className='flex w-fit mx-auto items-center gap-1.5'>
								<Location color='#E65800' size={24} />
								<span className='text-[#454545]'>Ikoyi, Lagos</span>
							</div>
						</div>
					</div>
					<div className='space-y-2.5 text-center w-fit'>
						<div className='mx-auto w-[9.8125rem] h-[7.6875rem] bg-[#D9D9D9] rounded-lg grid place-items-center'>
							<Image src='/images/house-listing.png' width={157} height={123} alt='' className='rounded-lg' />
						</div>
						<div className='text-center space-y-1'>
							<p className='text-[#454545] text-sm'>3-Bedroom Apartment</p>
							<p className='text-foundation-orange text-sm font-medium'>₦45,000,000</p>
							<div className='flex w-fit mx-auto items-center gap-1.5'>
								<Location color='#E65800' size={24} />
								<span className='text-[#454545]'>Wuse 2, Abuja</span>
							</div>
						</div>
					</div>
					<div className='space-y-2.5 text-center w-fit'>
						<div className='mx-auto w-[9.8125rem] h-[7.6875rem] bg-[#D9D9D9] rounded-lg grid place-items-center'>
							<Image src='/images/house-listing.png' width={157} height={123} alt='' className='rounded-lg' />
						</div>
						<div className='text-center space-y-1'>
							<p className='text-[#454545] text-sm'>4-Bedroom Luxury Villa</p>
							<p className='text-foundation-orange text-sm font-medium'>₦180,000,000</p>
							<div className='flex w-fit mx-auto items-center gap-1.5'>
								<Location color='#E65800' size={24} />
								<span className='text-[#454545]'>Lekki, Lagos</span>
							</div>
						</div>
					</div>
				</section>
				<section className='px-0 py-6 grid grid-cols-2 place-items-center gap-y-6 bg-[#FAFAFA] rounded-lg'>
					<div className='space-y-2.5 text-center w-fit'>
						<div className='mx-auto w-[8.5625rem] h-[7.6875rem] bg-[#D9D9D9] rounded-lg grid place-items-center'>
							<Image src='/images/camry.png' width={134} height={120} alt='' className='rounded-lg' />
						</div>
						<div className='text-center space-y-1'>
							<p className='text-foundation-orange text-sm font-medium'>₦10,500,000</p>
							<p className='text-[#454545] text-sm'>2023 Toyota Camry XLE</p>
							<div className='flex w-fit mx-auto items-center gap-1.5'>
								<Location color='#E65800' size={24} />
								<span className='text-[#454545]'>Lekki, Lagos</span>
							</div>
						</div>
					</div>
					<div className='space-y-2.5 text-center w-fit'>
						<div className='mx-auto w-[8.5625rem] h-[7.6875rem] bg-[#D9D9D9] rounded-lg grid place-items-center'>
							<Image src='/images/camry.png' width={134} height={120} alt='' className='rounded-lg' />
						</div>
						<div className='text-center space-y-1'>
							<p className='text-foundation-orange text-sm font-medium'>₦4,200,000</p>
							<p className='text-[#454545] text-sm'>2018 Honda Accord</p>
							<div className='flex w-fit mx-auto items-center gap-1.5'>
								<Location color='#E65800' size={24} />
								<span className='text-[#454545]'>Lekki, Lagos</span>
							</div>
						</div>
					</div>
					<div className='space-y-2.5 text-center w-fit'>
						<div className='mx-auto w-[8.5625rem] h-[7.6875rem] bg-[#D9D9D9] rounded-lg grid place-items-center'>
							<Image src='/images/camry.png' width={134} height={120} alt='' className='rounded-lg' />
						</div>
						<div className='text-center space-y-1'>
							<p className='text-foundation-orange text-sm font-medium'>₦4,200,000</p>
							<p className='text-[#454545] text-sm'>2018 Honda Accord</p>
							<div className='flex w-fit mx-auto items-center gap-1.5'>
								<Location color='#E65800' size={24} />
								<span className='text-[#454545]'>Lekki, Lagos</span>
							</div>
						</div>
					</div>
					<div className='space-y-2.5 text-center w-fit'>
						<div className='mx-auto w-[8.5625rem] h-[7.6875rem] bg-[#D9D9D9] rounded-lg grid place-items-center'>
							<Image src='/images/camry.png' width={134} height={120} alt='' className='rounded-lg' />
						</div>
						<div className='text-center space-y-1'>
							<p className='text-foundation-orange text-sm font-medium'>₦30,000,000</p>
							<p className='text-[#454545] text-sm'>2021 Range Rover Sport</p>
							<div className='flex w-fit mx-auto items-center gap-1.5'>
								<Location color='#E65800' size={24} />
								<span className='text-[#454545]'>Maitama, Abuja</span>
							</div>
						</div>
					</div>
				</section>
			</div>
		</section>
	);
}
