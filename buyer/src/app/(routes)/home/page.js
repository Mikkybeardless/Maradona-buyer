import Image from 'next/image';
import blueToyota from '@/app/_assets/images/blue-toyota.png';
import blackLexus from '@/app/_assets/images/black-lexus.png';
import { ArrowDown2, SearchNormal1 } from 'iconsax-react';
import FeaturedCategories from '@/app/_components/featured-categories/featured-categories';
import RecentListings from '@/app/_components/recent-listings/recent-listings';
import AuctionBannerAd from '@/app/_components/auction-banner-ad/auction-banner-ad';
import AboutUs from '@/app/_components/about-us/about-us';
import Footer from '@/app/_components/footer/footer';

export default function Page() {
	return (
		<>
			<section className='mx-auto w-10/12 max-w-[75rem]'>
				<section className='bg-[#08093F] rounded-lg text-white px-11 gap-20 py-14 flex items-center mb-40'>
					<div className='space-y-4'>
						<h6 className='text-3xl'>Be on the road in comfort and style</h6>
						<p>Equip your vehicle for the adventure of a lifetime.</p>
						<button className='bg-white text-[#08093F] rounded-lg py-2.5 px-4'>Shop now</button>
					</div>
					<div className='text-center space-y-2'>
						<div className='rounded-lg overflow-clip size-fit'>
							<Image src='/images/yellow-car.png' alt='' width={220} height={178} />
						</div>
						<p>Car racks & roof boxes</p>
					</div>
					<div className='text-center space-y-2'>
						<div className='rounded-lg overflow-clip size-fit'>
							<Image src={blueToyota} alt='' width={220} height={178} />
						</div>
						<p>Car racks & roof boxes</p>
					</div>
					<div className='text-center space-y-2'>
						<div className='rounded-lg overflow-clip size-fit'>
							<Image src={blackLexus} alt='' width={220} height={178} />
						</div>
						<p>Car racks & roof boxes</p>
					</div>
				</section>
				<div className='mb-36'>
					<FeaturedCategories />
				</div>
				<div className='mb-28'>
					<RecentListings />
				</div>
			</section>
			<div>
				<AuctionBannerAd />
			</div>
			<div>
				<AboutUs />
			</div>
			<div>
				<Footer />
			</div>
		</>
	);
}
