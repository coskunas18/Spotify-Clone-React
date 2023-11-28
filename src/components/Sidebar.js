import React from 'react'
import Logo from 'img/logo.svg'
import Menu from 'components/Sidebar/Menu'
import Icon from 'icons'
import Playlists from 'components/Sidebar/Playlists'
import DownloadApp from './Sidebar/DownloadApp'
import { useSelector } from 'react-redux'
import SidebarCover from './Sidebar/SidebarCover'

export default function Sidebar() {

  const {sidebar} = useSelector(state => state.player)


  return (
    <aside className='w-60 pt-6 flex flex-col flex-shrink-0 '>
      <a href="#" className='mb-5 px-6'>
        <img src={Logo} alt="" className='h-10' />
      </a>
      <Menu />

      <nav className='mt-8'>
        <ul className='flex flex-col gap-y-3'>
          <li>
            <a href="#" className='px-6 flex items-center gap-3  text-link hover:text-white font-semibold text-sm'>
              <span className='w-6 h-6 flex items-center justify-center' >
                <Icon name="plus" size="26"/>
              </span>
                Çalma Listesi Oluştur
            </a>
          </li>

          <li>
            <a href="#"  className='px-6 flex items-center gap-3  text-link hover:text-white font-semibold text-sm'>
            <span className='w-6 h-6 flex items-center justify-center bg-gradient-to-br from-indigo-700 to bg-blue-300 rounded' >
                <Icon name="heart" size="15" />
              </span>
                Beğenilen Şarkılar
            </a>
          </li>
        </ul>
      </nav>

      <Playlists />
      
      <DownloadApp /> 

      {sidebar && <SidebarCover />}
    </aside>
  )
}
