import Icon from 'icons'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSidebar } from 'stores/player'
export default function SidebarCover() {

    const {current} = useSelector(state => state.player)
    const dispatch = useDispatch()

  return (
    <div className='pt-[100%] relative bg-black'>
        <img src={current.image}  className="w-full h-full object-cover absolute top-0 left-0" alt="" />
        <button
                onClick={()=> dispatch(setSidebar(false))}
                className='w-6 h-6 bg-black group-hover:opacity-60 opacity-0 hover:!opacity-100 hover:scale-105 group-hover: flex items-center absolute top-1 right-1 justify-center -rotate-90 rounded-full'>
                <Icon name="prev" size={16} />
               </button>
    </div>
  )
}
