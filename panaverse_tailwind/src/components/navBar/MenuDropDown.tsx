import React from 'react'
import {RiArrowDropDownLine} from 'react-icons/ri'

export default function MenuDropDown({labelName}:any) {
  return (
    <div className='text-white text-[24px] hover:text-[#11AD8E] hover:underline flex'>
            {labelName}
            <RiArrowDropDownLine className='mt-2'></RiArrowDropDownLine>
    </div>
  )
}
