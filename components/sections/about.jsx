import React from 'react';
import Image from 'next/image';

export default function About() {
	return (
		<div className='h-full md:h-[500px] mt-10 flex items-center justify-start flex-col px-10 space-y-6 md:flex-row md:space-x-6 '>
			<div className=' rounded-xl overflow-clip md:w-1/2'>
				<Image src='/alessio.jpg' width={4837} height={3225} />
			</div>
			<div className='space-y-6 md:w-1/2'>
				<h2 className='text-5xl font-bold text-transparent bg-clip-text bg-primary'>About me</h2>
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
