import React from 'react'
import { FaRegCopyright } from "react-icons/fa6";

function Footer() {
  return (
    <div className='hidden sm:block absolute bottom-4 sm:bottom-7 left-4 sm:w-auto sm:left-28'>
        <h3 className='flex items-center gap-x-2 text-xs sm:text-sm'><FaRegCopyright /> 2024 PPK Ormawa HIMFA, All Rights Reserved.</h3>
    </div>
  )
}

export default Footer