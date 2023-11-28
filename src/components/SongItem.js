import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setCurrent } from 'stores/player'
import Icon from 'icons'

export default function SongItem({item}) {


    const dispatch = useDispatch();
    const {current,playing,controls} = useSelector(state => state.player)

    const imageStyle = item => {
        switch (item.type) {
            case 'artist':
                return 'rounded-full'

            case 'podcast':
              return 'rounded-xl'

            default:
              return 'rounded'
        }
    }

    const updateCurrent = () => {
        if (current?.id === item.id) {
            if (playing) {
                controls.pause()
            }else{
                controls.play()
            }
        }
        dispatch(setCurrent(item))
    }

    const isCurrentItem  = (current?.id === item.id && playing)


  return (
    <NavLink className={'bg-footer p-4 rounded hover:bg-active group'} key={item.id}>
      <div className='pt-[100%] relative mb-4'>
         <img className={`absolute inset-0 w-full object-cover h-full ${imageStyle(item)}`} src={item.image} alt="" />
         <button
         onClick={updateCurrent}
         className={`w-10 h-10 rounded-full bg-primary absolute group-hover:flex group-focus:block  bottom-2 right-2 items-center
          justify-center ${!isCurrentItem ?  'hidden' : 'flex'} `}>
        <Icon name={isCurrentItem ? 'pause' : 'play'} size={16} />
         </button>

      </div>
      <h6 className='overflow-hidden overflow-ellipsis whitespace-normal text-base font-semibold'>
          {item.title}
      </h6>
      <p className='line-clamp-2 text-sm text-link mt-1'>
          {item.description}
      </p>
   </NavLink>
  )
}
