import {AiFillPlusSquare} from "react-icons/ai"
import {AiFillHeart} from "react-icons/ai"
import {BiSolidDownload} from "react-icons/bi"

const HomeIcon = ({size}) => {
    return (
    <svg width={size} height={size} data-encore-id="icon" role="img" aria-hidden="true" class="Svg-sc-ytk21e-0 iYxpxA home-icon" viewBox="0 0 24 24">
        <path d="M12.5 3.247a1 1 0 0 0-1 0L4 7.577V20h4.5v-6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 0 1 3 0l7.5 4.33a2 2 0 0 1 1 1.732V21a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-1-1v-6h-3v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.577a2 2 0 0 1 1-1.732l7.5-4.33z"
        fill="currentColor">
        </path>
     </svg>
    )
}

const CollectionIcon = ({size}) => {
    return (
    <svg width={size} height={size} data-encore-id="icon" role="img" aria-hidden="true" class="Svg-sc-ytk21e-0 iYxpxA home-icon" viewBox="0 0 24 24">
     <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"
       fill="currentColor">
     </path>
     </svg>
    )
}


const SearchIcon = ({size}) => {
    return (
    <svg width={size} height={size} data-encore-id="icon" role="img" aria-hidden="true" class="Svg-sc-ytk21e-0 iYxpxA home-icon" viewBox="0 0 24 24">
      <path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 1 0 1.414-1.414l-4.344-4.344a9.157 9.157 0 0 0 2.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"
       fill="currentColor">
       </path>
     </svg>
    )
}


const PlusIcon = ({size}) => {
    return (
        <div>
          <AiFillPlusSquare className="text-white opacity-80" size={size} />
        </div>
        
    )
}

const HeartIcon = ({size}) => {
    return (
        <div>
          <AiFillHeart className="text-gray-300 " size={size} />
        </div>
        
    )
}

const DownloadIcon = ({size}) => {
    return (
        <div>
            <BiSolidDownload className="text-gray-400 " size={size} />
        </div>
    )
}


const PrevIcon = ({size}) => {
    return (
        <div>
            <svg width={size} height={size} data-encore-id="icon" role="img" aria-hidden="true" class="Svg-sc-ytk21e-0 kgVuXA IYDlXmBmmUKHveMzIPCF" viewBox="0 0 16 16">
                <path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0z"
                 fill="currentColor">
                </path>
            </svg>
        </div>
    )
}


const NetxIcon = ({size}) => {
    return (
        <div>
          <svg width={size} height={size} data-encore-id="icon" role="img" aria-hidden="true" class="Svg-sc-ytk21e-0 kgVuXA IYDlXmBmmUKHveMzIPCF" viewBox="0 0 16 16">
            <path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z"
             fill="currentColor">
            </path>
            </svg>
        </div>
    )
}







const Icon = ({name,size = 24}) =>{
    const icons = {
        home:HomeIcon,
        collection:CollectionIcon,
        search:SearchIcon,
        plus:PlusIcon,
        heart:HeartIcon,
        download:DownloadIcon,
        prev:PrevIcon,
        next:NetxIcon
    }

    const Component = icons[name]
    return <Component size={size} />
}

export default Icon