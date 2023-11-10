import React from 'react'
import Icon from 'icons'

export default function DownloadApp() {
  return (
    <div className='h-10 flex items-center text-sm flex-shrink-0 text-link hover:text-white gap-x-4 px-6'>
        <Icon name="download" size={20} />
        Uygulamayı Yükle
    </div>
  )
}
