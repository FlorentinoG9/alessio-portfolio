import React, { useState, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { XIcon, MenuIcon } from '@heroicons/react/solid';

export default function MenuNav({ children }) {
	const [active, setActive] = useState(false);
	return (
		<Menu>
			<Menu.Button>
				<button onClick={() => setActive(!active)}>
					{active ? (
						<XIcon className='rounded-full p-1' />
					) : (
						<MenuIcon className='rounded-full p-1' />
					)}
				</button>
			</Menu.Button>
      <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
				<Menu.Items>{children}</Menu.Items>
			</Transition>
		</Menu>
	);
}
