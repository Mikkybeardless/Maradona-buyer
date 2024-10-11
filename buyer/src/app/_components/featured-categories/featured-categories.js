import Image from 'next/image';

export default function FeaturedCategories() {
	return (
		<section>
			<header className='mb-8'>
				<h1 className='text-[#040421] font-semibold text-3xl'>Featured Categories</h1>
			</header>
			<div className='flex items-start h-[27rem] mb-7 justify-between gap-5'>
				<section className='px-2 w-full py-6 bg-[#FAFAFA] rounded-lg'>
					<div className='mx-auto w-fit'>
						<header className='mb-3'>
							<h2 className='font-medium text-[#040421]'>Cars</h2>
						</header>
						<section className='grid grid-cols-3 gap-2'>
							<div className='text-center space-y-5'>
								<Image src='/images/bmw.png' width={159} height={139} alt='' className='rounded-lg' />
								<p className='text-foundation-orange text-sm'>New</p>
							</div>
							<div className='text-center space-y-5'>
								<Image src='/images/used.png' width={159} height={139} alt='' className='rounded-lg' />
								<p className='text-foundation-orange text-sm'>Used</p>
							</div>
							<div className='text-center space-y-5'>
								<Image src='/images/commercial.png' width={159} height={139} alt='' className='rounded-lg' />
								<p className='text-foundation-orange text-sm'>Commercial</p>
							</div>
							<div className='text-center space-y-5'>
								<Image src='/images/luxury.png' width={159} height={139} alt='' className='rounded-lg' />
								<p className='text-foundation-orange text-sm'>Luxury</p>
							</div>
							<div className='text-center space-y-5'>
								<Image src='/images/truck.png' width={159} height={139} alt='' className='rounded-lg' />
								<p className='text-foundation-orange text-sm'>Truck</p>
							</div>
							<div className='text-center space-y-5'>
								<Image src='/images/pre-owned.png' width={159} height={139} alt='' className='rounded-lg' />
								<p className='text-foundation-orange text-sm'>Certified Pre-Owned</p>
							</div>
						</section>
					</div>
				</section>
				<section className='px-2 w-full py-6 bg-[#FAFAFA] rounded-lg'>
					<div className='mx-auto w-fit'>
						<header className='mb-3'>
							<h2 className='font-medium text-[#040421]'>Houses</h2>
						</header>
						<section className='grid grid-cols-3 gap-2'>
							<div className='text-center space-y-5'>
								<Image src='/images/duplex.png' width={159} height={139} alt='' className='rounded-lg' />
								<p className='text-foundation-orange text-sm'>Duplexes</p>
							</div>
							<div className='text-center space-y-5'>
								<Image src='/images/apartment.png' width={159} height={139} alt='' className='rounded-lg' />
								<p className='text-foundation-orange text-sm'>Apartments</p>
							</div>
							<div className='text-center space-y-5'>
								<Image src='/images/bungalow.png' width={159} height={139} alt='' className='rounded-lg' />
								<p className='text-foundation-orange text-sm'>Bungalows</p>
							</div>
							<div className='text-center space-y-5'>
								<Image src='/images/bungalow2.png' width={159} height={139} alt='' className='rounded-lg' />
								<p className='text-foundation-orange text-sm'>Bungalows</p>
							</div>
							<div className='text-center space-y-5'>
								<Image src='/images/villa.png' width={159} height={139} alt='' className='rounded-lg' />
								<p className='text-foundation-orange text-sm'>Luxury Villas</p>
							</div>
							<div className='text-center space-y-5'>
								<Image src='/images/detached.png' width={159} height={139} alt='' className='rounded-lg' />
								<p className='text-foundation-orange text-sm'>Detached Houses</p>
							</div>
						</section>
					</div>
				</section>
			</div>
			<section className='px-2 py-6 rounded-lg bg-[#FAFAFA]'>
				<header className='mb-3'>
					<h2 className='font-medium text-[#040421]'>Lands</h2>
				</header>
				<div className='w-full flex items-center justify-between'>
					<div className='text-center space-y-5'>
						<Image src='/images/residential-land.png' width={389} height={208} alt='' className='rounded-lg' />
						<p className='text-foundation-orange text-sm'>Residential Land</p>
					</div>
					<div className='text-center space-y-5'>
						<Image src='/images/commercial-land.png' width={389} height={208} alt='' className='rounded-lg' />
						<p className='text-foundation-orange text-sm'>Commercial Land</p>
					</div>
					<div className='text-center space-y-5'>
						<Image src='/images/residential-land.png' width={389} height={208} alt='' className='rounded-lg' />
						<p className='text-foundation-orange text-sm'>Industrial Land</p>
					</div>
				</div>
			</section>
		</section>
	);
}
