'use client';
import { Grid, Grid1, Grid3, List } from 'iconsax-react';

export default function SortAndViewOptions() {
	return (
		<div className='flex justify-between items-center mb-6'>
			<div>
				<label className='mr-2'>Sort by:</label>
				<select className='p-2 border rounded-lg'>
					<option value='recommended'>Recommended</option>
					<option value='latest'>Latest</option>
				</select>
			</div>

			<div className='flex space-x-4'>
				<button>
					<Grid1 size='24' color='gray' />
				</button>
				<button>
					<Grid3 size='24' color='gray' />
				</button>
			</div>
		</div>
	);
}
