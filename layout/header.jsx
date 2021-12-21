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
		<div className='relative bg-primary h-screen text-white px-10 '>
			<header className='flex justify-between h-28 items-center  max-w-7xl mx-auto'>
				<h2 className='font-bold text-2xl'>Alessio Muyanni</h2>
				<MenuNav>
					{nav.map(({ name, href }, idx) => {
						return (
							<>
								<Item key={idx} name={name} href={href} />
							</>
						);
					})}
				</MenuNav>
			</header>
			<div className='absolute bottom-0 max-w-7xl mx-auto'>
				<Hero />
			</div>
		</div>
	);
}
