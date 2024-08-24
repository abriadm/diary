import { profile } from '../components/data'
import { IoChatboxOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Konselor() {

  const listItem = profile.map((item) => (
    <Link
      to={item.url}
      key={item.id}
      className='w-full max-w-[300px] h-fit bg-[#FCDC94] flex items-center justify-center gap-x-8 py-4 transition duration-300 ease-in hover:shadow-xl rounded-xl'
    >
      <img
        src={item.img}
        alt={item.title}
        className='max-w-[100px] object-contain'
      />
      <h3
        className='text-xl text-[#5C1D19] font-bold'
      >{item.title}</h3>
      <IoChatboxOutline className='text-3xl font-bold text-[#FC4100]' />
    </Link>
  ));

  return (
    <div className='flex flex-col w-full overflow-x-hidden pt-24 sm:mt-14 h-screen items-center'>
      <h1 className='text-2xl sm:text-3xl font-bold font-helvetica text-center'>Konselor Sebaya Kami!!</h1>
      <div className='flex flex-col pb-10 md:flex-row md:flex-wrap mt-8 gap-y-10 gap-x-11 w-[300px] overflow-x-hidden md:w-[990px] h-fit'>
        {listItem}
      </div>
    </div>
  )
}

export default Konselor