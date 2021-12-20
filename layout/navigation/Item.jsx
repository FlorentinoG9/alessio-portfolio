import React from 'react'
import { Menu } from '@headlessui/react'

export default function Item({href, name}) {
  return (
    <Menu.item>
      <a href={href}>
        {name}
      </a>
    </Menu.item>
  )
}
