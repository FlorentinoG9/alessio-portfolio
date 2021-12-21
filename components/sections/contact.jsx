import React from 'react';
import SocialIcons from '../socialIcons';

export default function Contact() {
	return (
		<div className='flex justify-center h-full items-center p-10 text-center'>
			<div className='relative bg-slate-500 w-full h-full rounded-lg flex flex-col md:flex-row'>
				<div className='bg-primary w-full md:w-1/3 text-white rounded-lg p-3 flex flex-col items-center md:justify-start py-5 md:pt-10 justify-center space-y-5'>
					<h2 className='font-bold text-2xl'>Alessio Muyanni</h2>
					<p className='text-sm font-thin px-5'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
						culpa ex impedit consequuntur praesentium incidunt ipsa pariatur
						natus perspiciatis voluptate!
					</p>
					<div>
						<SocialIcons classes='text-white hover:text-gray-300' />
					</div>
				</div>
				<div className='flex md:w-2/3 justify-center h-2/3 md:h-full  items-center p-5'>
					<form>
						<ul className='w-full text-left'>
							<div className='flex flex-col md:flex-row md:justify-between md:space-x-5'>
								<li className='flex flex-col  mt-2'>
									<label
										className='text-sm font-thin text-white mb-1'
										htmlFor='name'
									>
										Full Name
									</label>
									<input
										className='rounded-lg px-4 py-2'
										type='text'
										name='name'
										id='name'
										placeholder='Full Name'
									/>
								</li>
								<li className='flex flex-col  mt-2'>
									<label
										className='text-sm font-thin text-white mb-1'
										htmlFor='email'
									>
										Email
									</label>
									<input
										className='rounded-lg px-4 py-2'
										type='text'
										name='email'
										id='email'
										placeholder='Email'
									/>
								</li>
							</div>

							<li className='flex flex-col  mt-2'>
								<label
									className='text-sm font-thin text-white mb-1'
									htmlFor='message'
								>
									Message
								</label>
								<textarea
									className='rounded-lg px-4 py-2'
									name='message'
									id='message'
									cols='30'
									rows='10'
								></textarea>
							</li>
						</ul>
						<button
							className='bg-primary w-full mt-3 px-4 py-2 rounded-lg text-white shadow-md shadow-slate-800'
							type='submit'
						>
							Send
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
