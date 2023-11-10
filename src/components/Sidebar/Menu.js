import React from 'react'
import Icon from 'icons' 
import { NavLink } from 'react-router-dom'

export default function Menu() {
  return (
   <nav className='px-6'>
     <ul className='flex flex-col'>
        <li>
            <NavLink  to={"/"} className='h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4'>
                <span>
                    <Icon  name="home" />
                </span>
                Anasayfa
            </NavLink>
        </li>
        <li>
            <NavLink to={"/search"} className='h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4'>
            <span>
              <Icon  name="search" />
            </span>
                Ara
            </NavLink>
        </li>
        <li>
            <NavLink to={"/collection"} className='h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4'>
              <span>
                 <Icon  name="collection" />
              </span>
                Kitaplığın
            </NavLink>
        </li>
     </ul>
   </nav>
  )
}
