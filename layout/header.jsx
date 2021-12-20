import React, { Fragment } from 'react';
import Link from 'next/link';
import Hero from '../components/Hero';
import { useState, useEffect } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { XIcon, MenuIcon } from '@heroicons/react/solid';

const nav = [
	{ name: '', href: '' },
	{ name: '', href: '' },
	{ name: '', href: '' },
];

export default function Header() {
	const [active, setActive] = useState(false);

	return (
		<div className='relative bg-primary h-screen text-white px-10'>
			<header className='flex justify-between h-16 items-center max-w-7xl mx-auto '>
				<h2 className='font-bold text-2xl'>Alessio Muyanni</h2>
				<Menu>
					<Menu.Button className='h-8 w-8 '>
						<button onClick={() => setActive(!active)}>
							{active ? (
								<XIcon className='rounded-full p-1' />
							) : (
								<MenuIcon className='rounded-full p-1' />
							)}
						</button>
					</Menu.Button>
				</Menu>
				{/* <nav>
					<ul className='flex space-x-3'>
						<li>
							<Link href='/'>
								<a>Home</a>
							</Link>
						</li>
						<li>
							<Link href='#about'>
								<a>About me</a>
							</Link>
						</li>
						<li>
							<Link href='#contact'>
								<a>Contact</a>
							</Link>
						</li>
					</ul>
				</nav> */}
			</header>
			<Hero />
		</div>
	);
}
