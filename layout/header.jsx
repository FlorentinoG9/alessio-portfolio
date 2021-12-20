import React from 'react';
import Hero from '../components/Hero';

const nav = [
	{ name: '', href: '' },
	{ name: '', href: '' },
	{ name: '', href: '' },
];

export default function Header() {

	return (
		<div className='relative bg-primary h-screen text-white px-10'>
			<header className='flex justify-between h-16 items-center max-w-7xl mx-auto '>
				<h2 className='font-bold text-2xl'>Alessio Muyanni</h2>
			
			</header>
			<Hero />
		</div>
	);
}
