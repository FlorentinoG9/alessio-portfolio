import React from 'react';
import { Menu } from '@headlessui/react';

export default function MenuItem({ href, name, disabled = false }) {
	return (
		<Menu.Item disabled={disabled}>
			{({ active, disabled }) => (
				<a
					href={href}
					className={`
					${
						disabled
							? 'text-gray-200'
							: active
							? 'bg-orange-300 text-black/80'
							: 'text-gray-900'
					} group flex rounded-md items-center w-full px-2 py-2 text-sm`}
				>
					{name}
				</a>
			)}
		</Menu.Item>
	);
}
