import React from 'react'
import { profile } from '../components/data'
import { IoChatboxOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Konselor() {

  const listItem = profile.map((item) => (
    <Link to={item.url} key={item.id} className='w-[300px] bg-[#FCDC94] flex items-center justify-center gap-x-8 py-4 transition duration-300 ease-in hover:shadow-xl rounded-xl'>
      <img src={item.img} alt={item.title} />
      <h3 className='text-xl text-[#5C1D19] font-bold'>{item.title}</h3>
      <IoChatboxOutline className='text-3xl font-bold text-[#FC4100]' />
    </Link>
  ))

  const mobileItem = profile.map((item) => (
    <Link to={item.url} key={item.id}>
      <img src={item.img} alt={item.title} />

    </Link>
  ));

  return (
    <div className='flex flex-col w-full sm:mt-14 items-center'>
      <h1 className='text-2xl sm:text-3xl font-bold font-helvetica'>Konselor Sebaya Kami!!</h1>
      {/* Desktop */}
      <div className='hidden sm:inline-flex flex-wrap mt-12 gap-y-9 gap-x-11 w-[990px]'>
        {listItem}
      </div>
      
      {/* Mobile */}
      <div className='inline-flex flex-col sm:hidden'>
        {mobileItem}
      </div>

      {/* Line */}
      
    </div>
  )
}

export default Konselor