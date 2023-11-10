import React from 'react'
import { Menu } from '@headlessui/react'
import {AiOutlineCaretDown} from "react-icons/ai"

export default function Auth() {

    const user = {
        name:'Coşkun Demirel',
        avatar:'https://avatars.githubusercontent.com/u/96111504?v=4'
    }

  return (
    <Menu as="nav" className={"relative"}>
   {({open}) => (
 <>
    <Menu.Button className={`flex items-center h-8 rounded-3xl bg-black hover:bg-active ${open ? 'bg-active' : 'bg-black'}`}>
        <img src={user.avatar} alt="" className='w-8 h-8 rounded-full p-px mr-2' />
        <span className='text-sm font-semibold mr-2 pr-2'>{user.name}</span>
        <AiOutlineCaretDown />
    </Menu.Button>
    <Menu.Items className={"absolute top-full right-0 w-48 bg-active rounded translate-y-2"}>
      <Menu.Item>
        {({ active }) => (
          <a
            className={`${active && 'bg-blue-500'}`}
            href="/account-settings"
          >
            Account settings
          </a>
        )}
      </Menu.Item>
    </Menu.Items>
 </>
   )}
  </Menu>
  )
}
