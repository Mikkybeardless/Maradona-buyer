export default function ProductCard({ product }) {
	return (
		<div className='bg-white rounded-lg shadow-md overflow-hidden mb-4'>
			<img src={product.image} alt={product.title} className='w-full h-48 object-cover' />
			<div className='p-4'>
				<h3 className='text-orange-500 font-bold text-lg'>{product.price}</h3>
				<p className='text-gray-700 text-sm'>{product.title}</p>
				<p className='text-gray-500 text-sm'>{product.location}</p>
				<div className='flex space-x-2 mt-2'>
					<span className='bg-gray-200 text-xs px-2 py-1 rounded-md'>Automobile</span>
					<span className='bg-gray-200 text-xs px-2 py-1 rounded-md'>Nigerian used</span>
				</div>
			</div>
		</div>
	);
}
