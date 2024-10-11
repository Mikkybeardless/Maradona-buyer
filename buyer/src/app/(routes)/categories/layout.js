import { Navbar } from '@/app/_components/navbar/navbar';
import { ArrowDown2, SearchNormal1 } from 'iconsax-react';
import Image from 'next/image';
import logo from '@/app/_assets/images/logo.png';

export default function Layout({ children }) {
	return (
		<section>
			<div className=''>
				<Navbar />
				<section id='top' className='flex items-center justify-between mb-7 mx-auto w-10/12 max-w-[75rem] bg-white'>
					<Image src={logo} width={164} height={65} alt='logo' className='' />
					<div className='flex items-center px-5 py-3 rounded-lg gap-3 border border-[#DED9DD]'>
						<p>Categories</p>
						<ArrowDown2 size={20} />
					</div>
					<div className='w-[40rem] flex gap-3 items-center px-4 py-3 bg-white border border-[#DED9DD] rounded-lg'>
						<SearchNormal1 size={24} />
						<input type='search' className='w-full outline-none text-sm' placeholder='Property type, location, price range' />
					</div>
					<button className='bg-foundation-orange text-white rounded-lg px-4 py-3'>Become a seller</button>
				</section>
				{children}
			</div>
		</section>
	);
}
