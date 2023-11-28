import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Title({title,more=false}) {
  return (
    <header className='flex items-center justify-between'>
    <NavLink to="#" className={"hover:underline"}>
       <h3 className='text-2xl text-white font-semibold tracking-tight'>{title}</h3>
    </NavLink>

   {more && (
    <NavLink className={"text-sm font-semibold uppercase text-link hover:underline"} to={more}>
        SEE ALL
    </NavLink>
   )}
</header>
  )
}
