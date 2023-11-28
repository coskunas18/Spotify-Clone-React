import React from 'react'
import { Menu } from '@headlessui/react'
import {AiOutlineCaretDown} from "react-icons/ai"
import { FaExternalLinkAlt } from "react-icons/fa";


export default function Auth() {

    const user = {
        name:'Coşkun Demirel',
        avatar:'https://avatars.githubusercontent.com/u/96111504?v=4'
    }

  return (
    <Menu as="nav" className={"relative"}>
   {({open}) => (
 <>
    <Menu.Button className={`flex items-center pr-2 h-8 rounded-3xl hover:bg-active ${open ? 'bg-active' : 'bg-black'}`}>
        <img src={user.avatar} alt="" className='w-8 h-8 rounded-full p-px mr-2' />
        <span className='text-sm font-semibold mr-2 pr-2'>{user.name}</span>
        <span className={open === true && 'rotate-180'}>
        <AiOutlineCaretDown />
        </span>

    </Menu.Button>
    <Menu.Items className={"absolute top-full right-0 w-48 bg-active rounded translate-y-2"}>
      <Menu.Item>
        {({ active }) => (
          <a
            className={`h-10  flex justify-between items-center px-2 text-sm rouned ${active && 'bg-white opacity-10 text-white'}`}
            href="/account-settings"
          >
            Account 
            <FaExternalLinkAlt size={17} />
          </a>
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
          <a
            className={`h-10 flex items-center px-2 text-sm rouned ${active && 'bg-white opacity-10'}`}
            href="/account-settings"
          >
            Profile
          </a>
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
          <a
            className={`h-10 flex items-center px-2 text-sm rouned ${active && 'bg-white opacity-10'}`}
            href="/account-settings"
          >
            Logout 
          </a>
        )}
      </Menu.Item>
    </Menu.Items>
 </>
   )}
  </Menu>
  )
}
