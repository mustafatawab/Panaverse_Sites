import React from 'react'
import {BiBell} from 'react-icons/bi'
import {FiMoon} from 'react-icons/fi'
export default function NavIconsButtons() {
  return (
    <div className='flex text-white text-3xl   space-x-7'>
            <BiBell ></BiBell>
            <p className='-mt-2'>|</p>
            <FiMoon></FiMoon>
    </div>
  )
}
