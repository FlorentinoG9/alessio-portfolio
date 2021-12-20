import React from 'react';
import Header from './header';
import Footer from './footer';

export default function Layout({ children }) {
	return (
		<div className='absolute h-full w-full'>
			<Header />
			{children}
			<Footer />
		</div>
	);
}
