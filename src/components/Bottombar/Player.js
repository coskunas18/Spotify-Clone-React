import Icon from 'icons'
import React, { useEffect, useMemo, useRef,} from 'react'
import CustomRange from 'components/CustomRange';
import {useAudio,useFullscreen,useToggle} from 'react-use';
import {secondsToTime} from 'utils.js'
import { useDispatch, useSelector } from 'react-redux';
import { setControls,setPlaying,setSidebar } from 'stores/player';
import FullScreenPlayer from 'components/FullScreenPlayer';

export default function Player() {

  const fsRef = useRef()
  const [show,toggle] = useToggle(false);
  const isFullScreen = useFullscreen(fsRef,show,{onClose:() => toggle(false)});

  const dispatch = useDispatch();
  const {current,sidebar} = useSelector(state => state.player)
  const [audio, state, controls, ref] = useAudio({
    src: current?.src,
  });

  useEffect(()=>{
    dispatch(setPlaying(state.playing))
  },[state.playing])


  useEffect(()=>{
    controls.play();
  },[current])

  useEffect(()=>{
    dispatch(setControls(controls))
  },[])


  
  const volumeIcon = useMemo(()=> {
    if (state.volume === 0 || state.muted) {
      return 'volumemute'
    }

    if (state.volume > 0 && state.volume < 0.33) {
      return 'volumelow'
    }

    
    if (state.volume >= 0.33 && state.volume < 0.66) {
      return 'volumenormal'
    }

    return 'volumehigh'

  },[state.volume,state.muted])

  return (
    <div className='flex justify-between px-4 items-center h-full text-white'>
      <div className='min-w-[11.25rem] w-[30%]'>
        {current && (
        <div className='flex items-center gap-x-2 '>
          {!sidebar && (
             <div className='w-14 h-14 flex-shrink-0 group relative'>
                <img src={current.image} alt="" />
                <button
                onClick={()=> dispatch(setSidebar(true))}
                className='w-6 h-6 bg-black group-hover:opacity-60 opacity-0 hover:!opacity-100 hover:scale-105 group-hover: flex items-center absolute top-1 right-1 justify-center rotate-90 rounded-full'>
                <Icon name="prev" size={16} />
               </button>
            </div>
          )}

        <div>
          <h6 className='text-sm line-clamp-1'>{current.title}</h6>
          <p className='text-[0.688rem] text-white text-opacity-70'>{current.artist}</p>
        </div>
        <button className='w-8 h-8 flex items-center text-white justify-center text-opacity-70 hover:text-opacity-100'>
            <Icon size={18} name="heartnofill" />
      </button>
      <button className='w-8 h-8 flex items-center text-white justify-center text-opacity-70 hover:text-opacity-100'>
            <Icon size={18} name="pictureinpicture" />
      </button>
       </div>

        )}
      </div>
      <div className='max-w-[45rem] w-[40%] flex flex-col items-center px-4 '>
        <div className='flex items-center gap-x-2'>
          <button className='w-8 h-8 flex items-center text-white justify-center text-opacity-70 hover:text-opacity-100'>
            <Icon size={18} name="shuffle" />
          </button>
          <button className='w-8 h-8 flex items-center text-white justify-center text-opacity-70 hover:text-opacity-100'>
            <Icon size={18} name="skipprev" />
          </button>
          <button
          onClick={controls[state?.playing ? 'pause' : 'play' ]}
          className='w-8 h-8 flex items-center bg-white justify-center text-black rounded-full hover:scale-105'>
            <Icon size={18} name={state?.playing ? 'pause' : 'play'}/>
          </button>
          <button className='w-8 h-8 flex items-center text-white justify-center text-opacity-70 hover:text-opacity-100'>
            <Icon size={18} name="skipnext"/>
          </button>
          <button className='w-8 h-8 flex items-center text-white justify-center text-opacity-70 hover:text-opacity-100'>
            <Icon size={18} name="repeat" />
          </button>
        </div>
        <div className='w-full flex items-center gap-x-2'>
          {audio}
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
      <div className='min-w-[11.25rem] w-[30%] flex justify-end items-center'>
      <button className='w-8 h-8 flex items-center text-white justify-center text-opacity-70 hover:text-opacity-100'>
            <Icon size={18} name="microphone" />
      </button>
      <button className='w-8 h-8 flex items-center text-white justify-center text-opacity-70 hover:text-opacity-100'>
            <Icon size={18} name="queue" />
      </button>
      <button className='w-8 h-8 flex items-center text-white justify-center text-opacity-70 hover:text-opacity-100'>
            <Icon size={18} name="device" />
      </button>
      <button className='w-8 h-8 flex items-center text-white justify-center text-opacity-70 hover:text-opacity-100'>
            <Icon size={18} name={volumeIcon} />
      </button>
      <div className='w-[5rem] max-w-full' >
      <CustomRange 
        step={0.01}
        min={0}
        max = {1}
        value = {state?.volume}
        onChange={value => controls.volume(value)}
        />
      </div>
      <button
      onClick={toggle}
      className='w-8 h-8 flex items-center text-white justify-center text-opacity-70 hover:text-opacity-100'>
        <Icon size={18} name="fullscreen" />
      </button>
      </div>

      <div ref={fsRef}>
        {isFullScreen && (
          <FullScreenPlayer toggle={toggle} state={state} controls={controls} />
        )  }
      </div>
    </div>
  )
}
