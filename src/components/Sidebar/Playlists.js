import React from 'react'

export default function Playlists() {
  return (
    <div className='mx-6 mt-4 pt-2 flex-auto overflow-auto border-t border-white border-opacity-20'>
        <ul>
            {new Array(40).fill(<li>
                <a href="" className='text-sm text-link hover:text-white flex h-8 items-center'>
                    22. Çalma Listem
                </a>
            </li>
            )}
        </ul>
    </div>
  )
}
