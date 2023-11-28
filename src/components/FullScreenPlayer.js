import React from 'react'
import { useSelector } from 'react-redux'
import {secondsToTime} from 'utils.js'
import CustomRange from './CustomRange'
import Icon from 'icons'
export default function FullScreenPlayer({toggle,state,controls}) {

    const {current} = useSelector(state => state.player)

  return (
    <div className=' h-full relative'>
        {current.title}
        <div className='absolute inset-0 object-cover bg-center bg-cover blur-md opacity-30' style={{ backgroundImage:`url(${current.image})` }}></div>
        <div className='w-full absolute bottom-4 flex flex-col items-center px-4 '>
        <div className='flex items-center gap-x-5'>
          <button className='w-8 h-8 flex items-center text-white justify-center text-opacity-70 hover:text-opacity-100'>
            <Icon size={24} name="shuffle" />
          </button>
          <button className='w-8 h-8 flex items-center text-white justify-center text-opacity-70 hover:text-opacity-100'>
            <Icon size={24} name="skipprev" />
          </button>
          <button
          onClick={controls[state?.playing ? 'pause' : 'play' ]}
          className='w-16 h-16 flex items-center bg-white justify-center text-black rounded-full hover:scale-105'>
            <Icon size={24} name={state?.playing ? 'pause' : 'play'}/>
          </button>
          <button className='w-8 h-8 flex items-center text-white justify-center text-opacity-70 hover:text-opacity-100'>
            <Icon size={24} name="skipnext"/>
          </button>
          <button className='w-8 h-8 flex items-center text-white justify-center text-opacity-70 hover:text-opacity-100'>
            <Icon size={24} name="repeat" />
          </button>
        </div>
        <div className='w-full flex items-center gap-x-2'>

          <div className='text-[0.688rem] text-white text-opacity-70'>
          {secondsToTime(state?.time)}
        </div>
        <CustomRange 
        step={0.1}
        min={0}
        max = {state?.duration || 1}
        value = {state?.time}
        onChange={value => controls.seek(value)}
        />
        <div className='text-[0.688rem] text-white text-opacity-70'>
          {secondsToTime(state?.duration)}
        </div>
        </div>
      </div>
    </div>
  )
}
