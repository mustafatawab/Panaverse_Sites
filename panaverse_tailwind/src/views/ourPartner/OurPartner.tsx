import React from 'react'
import Image from 'next/image'
import piaicImage from '../../assets/images/ourPartner/piaic.svg'
import psxImage from '../../assets/images/ourPartner/psx.svg'
import panaCloudImage from '../../assets/images/ourPartner/panaCloud.svg'
import sylaniImage from '../../assets/images/ourPartner/sylani.svg'
import cecosImage from '../../assets/images/ourPartner/cecos.svg'
import bahriaImage from '../../assets/images/ourPartner/bahriaUni.svg'
import airImage from '../../assets/images/ourPartner/airUni.svg'

export default function () {
  return (
    <div className='my-20'>

        <h1 className='my-10 text-[#11AD8E] text-4xl font-bold text-center'>Our Partner</h1>

        <div className='flex justify-center space-x-10 shadow-xl shadow-[#11ad8e3b]'>
            <Image src={piaicImage} alt='PIAIC Image'></Image>
            <Image src={psxImage} alt='PSC Image'></Image>
            <Image src={panaCloudImage} alt='PanaCloud Image'></Image>
            <Image src={sylaniImage} alt='Sylani Image'></Image>
            <Image src={cecosImage} alt='CECOS Image'></Image>
            <Image src={bahriaImage} alt='BAHRIA UNI Image'></Image>
            <Image src={airImage} alt='AIR UNI Image'></Image>

        </div>
    </div>
  )
}
