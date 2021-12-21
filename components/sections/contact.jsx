import React from 'react';
import SocialIcons from '../socialIcons';

export default function Contact() {
	return (
		<div className='flex justify-center h-full items-center bg-yellow-200 p-10 text-center'>
			<div className='relative bg-slate-500 w-full h-full rounded-lg'>
				<div className='bg-primary w-full text-white rounded-lg h-1/3 p-3 flex flex-col items-center justify-center space-y-5'>
					<h2 className='font-bold text-2xl'>Alessio Muyanni</h2>
					<p className='text-sm font-thin'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
						culpa ex impedit consequuntur praesentium incidunt ipsa pariatur
						natus perspiciatis voluptate!
					</p>
					<div className='flex space-x-5 justify-center'>
						<SocialIcons classes='text-white hover:text-gray-300' />
					</div>
				</div>
				<div className='w-2/3'>
					<form>

					</form>
				</div>
			</div>
		</div>
	);
}
