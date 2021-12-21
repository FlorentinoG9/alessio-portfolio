import React from 'react';
import Image from 'next/image';

export default function About() {
	return (
		<div className='h-screen mt-10 flex items-center justify-start flex-col px-10 space-y-6 md:flex-row md:space-x-6 md:items-start'>
			<div className=' rounded-xl overflow-clip md:w-1/3'>
				<Image src='/alessio.jpg' width={4837} height={3225} />
			</div>
			<div className='space-y-6 md:w-2/3'>
				<h2 className='text-5xl font-bold bg-clip-text bg-gradient-to-r from-[#b0cbd2] to-[#017da1]'>About me</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque alias
					ducimus porro quas quidem est quasi assumenda non nihil blanditiis
					vitae, unde laborum laudantium fugit labore magni autem sequi nobis.
				</p>
				<div>
					<a href='/' className='text-blue-400'>
						watch my work{' -> '}
					</a>
				</div>
			</div>
		</div>
	);
}
