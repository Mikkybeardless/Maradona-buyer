import { Apple, GooglePlay } from 'iconsax-react';
import Image from 'next/image';

const DownloadApp = () => {
	return (
		<div className='flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 p-6 bg-white'>
			{/* Left side: Download buttons */}
			<div className='flex flex-col items-start space-y-4 bg-[#EDEDED] rounded-[48px] p-[3.375rem_2.6875rem] pb-0 rounded-b-none'>
				<h2 className='text-4xl font-semibold'>Download the app for a better shopping experience</h2>
				<div className='flex space-x-4'>
					<a href='#' className='bg-[#040421] rounded-[6.25rem] text-white py-2.5 px-8 flex items-center space-x-2'>
						<GooglePlay size={32} color='#FFF' variant='Bold' />
						<span>Play Store</span>
					</a>
					<a href='#' className='bg-[#040421] rounded-[6.25rem] text-white py-2.5 px-8 flex items-center space-x-2'>
						<Apple size={32} color='#FFF' variant='Bold' />
						<span>Apple Store</span>
					</a>
				</div>

				{/* Phone Mockup Image */}
				<div className='mt-4'>
					<Image src='/images/phone.png' alt='Phone Mockup' height={761} width={586} />
				</div>
			</div>

			{/* Right side: QR code */}
			<div className='bg-[#040421] text-white p-10 h-full rounded-[48px]'>
				<h3 className='text-4xl font-semibold mb-16'>OR</h3>
				<p className='mb-4 font-semibold text-4xl'>Scan the QR code to download the app for free.</p>
				<div>
					<Image src='/images/qr-code.svg' alt='QR Code' className='mx-auto' width={330} height={330} />
				</div>
			</div>
		</div>
	);
};

export default DownloadApp;
