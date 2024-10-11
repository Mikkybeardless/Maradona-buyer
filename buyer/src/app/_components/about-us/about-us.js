import { MedalStar, RefreshCircle, TruckTime } from 'iconsax-react';
import TestimonialCard from '@/app/_components/testimonial-card/testimonial-card';
import DownloadApp from '@/app/_components/download-app/download-app';

export default function AboutUs() {
	const benefits = [
		{
			icon: <TruckTime size='48' color='#000' />,
			title: 'Nation wide delivery',
			description: 'Shop the best distress items just for you.',
		},
		{
			icon: <RefreshCircle size='48' color='#000' />,
			title: 'Free return policy',
			description: 'Shop the best distress items just for you.',
		},
		{
			icon: <MedalStar size='48' color='#000' />,
			title: '1 year Warranty',
			description: 'Shop the best distress items just for you.',
		},
	];

	const stats = [
		{ number: '26 000+', label: 'Sales' },
		{ number: '1 500+', label: 'Products are inspected monthly' },
		{ number: '70+', label: 'centres pan Nigeria' },
	];

	const testimonials = [
		{
			name: 'Rosemary Sunday',
			location: 'Federal Capital Territory',
			rating: 4,
			title: 'This platform is God sent i must say',
			content: "Been thinking of buying a car for a while but for insufficient funds, I couldn't. I saw online on Instagram that I can get a car on car loan through Cars45. I clicked on the link and was redirected to fill out a form which I did. Someone from the Cars45 team reached out to me and the rest is history. They managed all conversations with the seller so the process was fast, easy and stress free for me.",
			date: '22 Jun, 2022',
			avatar: '/images/rosemary.png',
		},
		{
			name: 'Rosemary Sunday',
			location: 'Federal Capital Territory',
			rating: 4,
			title: 'This platform is God sent i must say',
			content: "Been thinking of buying a car for a while but for insufficient funds, I couldn't. I saw online on Instagram that I can get a car on car loan through Cars45. I clicked on the link and was redirected to fill out a form which I did. Someone from the Cars45 team reached out to me and the rest is history. They managed all conversations with the seller so the process was fast, easy and stress free for me.",
			date: '22 Jun, 2022',
			avatar: '/images/rosemary.png',
		},
	];

	return (
		<>
			<div className='flex justify-between items-center py-8 space-x-4 my-7 mx-auto w-10/12 max-w-[75rem]'>
				{benefits.map((benefit, index) => (
					<div key={index} className='flex gap-4 items-center space-y-2'>
						{benefit.icon}
						<div>
							<h3 className='text-lg font-semibold'>{benefit.title}</h3>
							<p className='text-sm text-gray-500'>{benefit.description}</p>
						</div>
					</div>
				))}
			</div>
			<div className='py-8 mb-10 mx-auto w-10/12 max-w-[75rem]'>
				<h2 className='text-lg font-medium mb-6'>About us in numbers</h2>
				<table className='table-fixed w-11/12 mx-auto border border-gray-300 rounded-lg'>
					<tbody>
						<tr>
							{stats.map((stat, index) => (
								<td key={index} className='border-x border-collapse border-gray-300 text-center px-6 py-10'>
									<h3 className='text-foundation-orange text-2xl font-bold'>{stat.number}</h3>
									<p className='text-gray-600'>{stat.label}</p>
								</td>
							))}
						</tr>
					</tbody>
				</table>
			</div>
			<div className='mb-24 w-10/12 max-w-[75rem] mx-auto'>
				<h2 className='text-lg font-medium mb-8'>What our clients say</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-7'>
					{testimonials.map((testimonial, index) => (
						<TestimonialCard key={index} testimonial={testimonial} />
					))}
				</div>
			</div>
			<div className='w-10/12 max-w-[75rem] mx-auto'>
				<DownloadApp />
			</div>
			<div className='w-full p-12 bg-[#08093F] text-center'>
				<a href='#top' className='w-fit text-white text-xl font-medium'>
					Back to top
				</a>
			</div>
		</>
	);
}
