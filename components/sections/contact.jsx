import React from 'react';
import SocialIcons from '../socialIcons';

const init = {
	name: '',
	email: '',
	message: '',
};

export default function Contact() {
	return (
		<div className='flex justify-center h-full items-center p-10 text-center'>
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
				<div className='w-2/3 flex justify-center items-center'>
					<form>
						<ul className=''>
							<li className='flex flex-col text-left items-center mt-2'>
								<label className='text-sm font-thin text-white mb-1' htmlFor='name'>Full Name</label>
								<input
								className='rounded-lg px-4 py-2'
									type='text'
									name='name'
									id='name'
									placeholder='Full Name'
								/>
							</li>
							<li className='flex flex-col text-left items-center mt-2'>
								<label className='text-sm font-thin text-white mb-1' htmlFor='email'>Email</label>
								<input
								className='rounded-lg px-4 py-2'
									type='text'
									name='email'
									id='email'
									placeholder='Email'
								/>
							</li>
							<li className='flex flex-col text-left items-center mt-2'>
								<label className='text-sm font-thin text-white mb-1' htmlFor='message'>Message</label>
								<textarea
								className='rounded-lg px-4 py-2'
									name='message'
									id='message'
									cols='30'
									rows='10'
								></textarea>
							</li>
						</ul>
					</form>
				</div>
			</div>
		</div>
	);
}
