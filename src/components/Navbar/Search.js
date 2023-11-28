import Icon from "icons"

export default function Search() {
  return (
    <div className='mr-auto ml-4 relative'>
      <label htmlFor="search-input" className="text-black w-12 h-10 flex items-center justify-center absolute top-0 left-0">
        <Icon size={24} name="search" />
      </label>
      <input type="text" className='pl-12 h-10 text-black bg-white outline-none rounded-3xl text-sm max-w-full w-[22rem] placeholder-black/60' 
      placeholder='Sanatçılar,şarkılar veya prodcastler' />
    </div>
  )
}
