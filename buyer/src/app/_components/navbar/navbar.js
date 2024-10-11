import { Profile, Heart, NotificationBing, ShoppingCart } from 'iconsax-react';
import Link from 'next/link';

export const Navbar = () => {
	return (
		<>
			<section className='flex items-center justify-between py-4 mx-auto w-10/12 max-w-[75rem] bg-white'>
				<div className='flex items-center gap-8'>
					<Link href={''} className='text-sm'>
						Home
					</Link>
					<Link href={''} className='text-sm'>
						About
					</Link>
					<Link href={''} className='text-sm'>
						Testimonials
					</Link>
					<Link href={''} className='text-sm'>
						Help
					</Link>
				</div>
				<div className='flex items-center gap-7'>
					<Profile size={24} />
					<Heart size={24} />
					<NotificationBing size={24} />
					<ShoppingCart size={24} />
					<div className='flex items-center gap-5'>
						<button className='bg-foundation-orange text-white rounded-lg px-3 py-2'>Login</button>
						<button className='text-foundation-orange bg-white rounded-lg px-3 py-2'>Register</button>
					</div>
				</div>
			</section>
		</>
	);
};
