import React from 'react';
import MenuNav from './navigation';
import Item from './navigation/Item';
import Hero from '../components/Hero';

const nav = [
	{ name: 'Home', href: '#Hero' },
	{ name: 'About me', href: '#About' },
	{ name: 'Contact', href: '#Contact' },
];

export default function Header() {
	return (
		<div className='relative bg-primary h-screen text-white '>
			<img
				src='/hero-cover.jpg'
				alt='hero-cover'
				className='absolute w-full h-full object-cover'
			/>
			<header className='flex justify-between h-28 items-center max-w-7xl mx-auto px-10'>
				<h2 className='relative font-bold text-2xl'>Alessio Muyanni</h2>
				<nav className='relative hidden md:block text-lg text-white bg-black/50 px-4 py-2 rounded-lg'>
					<ul className=' flex space-x-3'>
						{nav.map(({ name, href }, idx) => {
							return (
								<li key={idx}>
									<a href={href}>{name}</a>
								</li>
							);
						})}
					</ul>
				</nav>
				<MenuNav>
					{nav.map(({ name, href }, idx) => {
						return <Item key={idx} name={name} href={href} />;
					})}
				</MenuNav>
			</header>
			<div className='absolute bottom-0 max-w-7xl mx-auto px-10 -mb-5'>
				<Hero />
			</div>
		</div>
	);
}
