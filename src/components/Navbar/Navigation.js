import React from 'react'
import Icon from 'icons'
import {useNavigate} from "react-router-dom"

export default function Navigation() {

    const navigate = useNavigate();

  return (
        <nav className='flex gap-x-4'>
          <button onClick={()=> {
             navigate(+1)
          }} className='w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-70 text-link'>
            <Icon size={22} name="prev" />
          </button>

          <button onClick={()=> {
             navigate(-1)
          }} className='w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-70 text-link'>
            <Icon size={22} name="next" />
          </button>
        </nav>
  )
}
