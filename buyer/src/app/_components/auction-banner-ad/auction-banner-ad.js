import { Location } from 'iconsax-react';
import Image from 'next/image';

export default function AuctionBannerAd() {
	return (
		<section className='relative flex'>
			{/* Background Image */}
			<Image src='/images/hand-bg.png' alt='Background' layout='fill' objectFit='cover' className='z-0' />

			<section className='z-10 bg-black bg-opacity-50 w-full px-10 py-20'>
				<div className='relative w-10/12 max-w-[75rem] mx-auto gap-5 rounded-lg text-white flex items-center justify-between'>
					<div>
						<h1 className='text-3xl mb-4'>Exclusive Auction Event: 10% Off on Selected Auction Listings</h1>
						<p className='mb-6'>Get an additional 10% discount on selected auction items. Limited time offer!</p>

						{/* What's Included */}
						<div className='mb-6'>
							<h2 className='text-sm font-semibold'>What’s included</h2>
							<ul className='list-disc list-inside text-left text-sm mt-3 space-y-2'>
								<li className='font-medium'>
									Luxury Cars: <span className='font-normal'>High-end models with significant savings.</span>
								</li>
								<li className='font-medium'>
									Real Estate: <span className='font-normal'>Prime houses and land parcels ready for bidding.</span>
								</li>
							</ul>
						</div>

						<button className='bg-orange-500 hover:bg-orange-600 text-white py-3 px-7 rounded-lg transition'>Auction</button>
					</div>

					<div>
						{/* How it works */}
						<div className='mb-6'>
							<h2 className='text-sm font-semibold'>How it works</h2>
							<ul className='list-disc list-inside text-sm text-left mt-3 space-y-2'>
								<li className='font-medium'>
									Browse Listings: <span className='font-normal'>Visit our auction section and look for items marked with the special 10% discount badge.</span>
								</li>
								<li className='font-medium'>
									Place Your Bids: <span className='font-normal'> Participate in the live auctions and place your bids on your desired items.</span>
								</li>
								<li className='font-medium'>
									Win and Save: <span className='font-normal'> If you win the auction, the additional 10% discount will be applied automatically to your final bid price.</span>
								</li>
							</ul>
						</div>

						{/* Hurry Text */}
						<p className='text-3xl mb-6'>Hurry! This limited-time offer won’t last long. Visit our auction section now and start bidding!</p>

						{/* Note */}
						<p className='text-sm mt-4 font-bold'>
							Note: <span className='font-normal'>Terms and conditions apply. Discount applies only to selected auction items. Offer valid while supplies last.</span>
						</p>
					</div>
				</div>
			</section>
		</section>
	);
}
