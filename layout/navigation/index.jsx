import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { MenuIcon } from '@heroicons/react/solid';

export default function MenuNav({ children }) {
	return (
		<Menu as='div' className='relative md:hidden'>
			<Menu.Button>
				<MenuIcon className='rounded-full p-1 w-10 h-10' />
			</Menu.Button>
			<Transition
				as={Fragment}
				enter='transition ease-out duration-100'
				enterFrom='transform opacity-0 scale-95'
				enterTo='transform opacity-100 scale-100'
				leave='transition ease-in duration-75'
				leaveFrom='transform opacity-100 scale-100'
				leaveTo='transform opacity-0 scale-95'
			>
				<Menu.Items className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-xl bg-white ring-1 ring-black/5 divide-y divided-gray-100 focus:outline-none'>
					{children}
				</Menu.Items>
			</Transition>
		</Menu>
	);
}
