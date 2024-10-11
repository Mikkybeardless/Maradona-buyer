import { Star1 } from 'iconsax-react';
import Image from 'next/image';

export default function TestimonialCard({ testimonial }) {
	return (
		<div className='bg-gray-100 rounded-lg p-6 shadow-md'>
			{/* Header with Avatar, Name, Location, and Rating */}
			<div className='flex items-center mb-4'>
				<Image src={testimonial.avatar} alt={testimonial.name} width={53} height={53} className='rounded-full mr-4' />
				<div>
					<h3 className='font-semibold text-lg'>{testimonial.name}</h3>
					<p className='text-gray-500 text-sm'>{testimonial.location}</p>
				</div>
				<div className='ml-auto flex items-center text-foundation-orange'>
					{/* Star Rating using IconSax */}
					{Array.from({ length: 5 }, (v, i) => (
						<Star1
							key={i}
							size='20'
							variant={i < testimonial.rating ? 'Bold' : 'Linear'} // Use Bold for filled stars and Linear for outlined stars
							className='mr-1'
						/>
					))}
				</div>
			</div>

			{/* Review Content */}
			<h4 className='font-semibold text-md mb-2'>{testimonial.title}</h4>
			<p className='text-gray-600 text-sm mb-4'>{testimonial.content}</p>

			{/* Footer with Timestamp */}
			<div className='text-gray-400 text-xs'>{testimonial.date}</div>
		</div>
	);
}
