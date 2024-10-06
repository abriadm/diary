import React from 'react'
import badges from "../assets/Badges.png"

function LandingPage() {
  return (
    <div className='flex flex-col items-center'>
        <div className='flex items-center mt-8'>
            <img className='w-12 mr-2' src={badges} alt='gambar' />
            <h3 className='font-bold text-xl'>PPK Ormawa HIMFA 2024</h3>
        </div>
        <h1 className='text-5xl font-bold mt-11'>Diary's</h1>
        <p>akddhbcshdbsdhcskjdnjhs</p>
    </div>
  )
}

export default LandingPage