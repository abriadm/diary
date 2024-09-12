import { Link } from "react-router-dom";
import hand from "../assets/tangan.png";
import { profile } from "../components/data";
import { FaRegCopyright } from "react-icons/fa6";
import { IoChatboxOutline } from "react-icons/io5";
import anonim from "../assets/anonymous.png";

function HomePage() {

  const listItem = profile.map((item) => (
    <Link
      key={item.id}
      to={item.url}
      className='w-full max-w-[300px] h-fit bg-[#FCDC94] flex items-center justify-center gap-x-8 py-4 transition duration-300 ease-in hover:shadow-xl rounded-xl'
    >
      <img
        src={item.img}
        alt={item.title}
        width={60}
        className='max-w-[100px] rounded-xl object-contain'
      />
      <h3 className='text-xl text-[#5C1D19] font-bold'>{item.title}</h3>
      <IoChatboxOutline className='text-3xl font-bold text-[#FC4100]' />
    </Link>
  ));

  return (
    <>
      <div className="absolute hidden sm:block -top-6 -left-7 w-2/3 h-[115px] rounded-2xl shadow-[#DCE0FF] shadow-xl bg-[#DCE0FF] -z-10 "></div>
      <div className="flex flex-col sm:h-auto sm:flex-row w-full mt-3  sm:mt-14 sm:justify-center items-center">
        <div className="flex w-fit mx-4 sm:mx-0 shadow-xl sm:shadow-none rounded-xl py-6 sm:py-0 px-5 sm:px-0 flex-col bg-[#F1F3C2] sm:bg-white sm:w-2/5">
          <h1 className="text-2xl sm:text-6xl font-balsamiq font-extrabold mb-4 sm:mb-6 text-[#757700]">
            Apa itu Diary&#39;s?
          </h1>
          <p className="font-normal text-[#343131] font-helvetica text-sm text-justify sm:w-11/12">
            Diary&#39;s merupakan website yang dibuat untuk memudahkan dalam berbagi
            cerita dan masalah. Dimana website ini memiliki beberapa fitur baik
            cerita secara langsung maupun anonim. Fitur ini dibuat atas dasar
            pertimbangan dan kenyamanan dari penggunaan dan tentunya terjaga
            kerahasiaannya. Ayo berbagi cerita melalui Diary&#39;s.
          </p>
          <span className="mt-4 text-lg text-[#8D493A] font-bold font-helvetica">Buka di jam 19.00 - 21.00 WIB</span>
          <Link
            to="https://youtu.be/jRV8F8z_bKY?si=4zs_GWMyaTKXp_nU"
            className="sm:mt-6 mt-7  self-center sm:self-auto py-2 px-6 bg-[#FF8343] transition ease-in duration-300 hover:shadow-xl text-white w-fit rounded"
          >
            Pelajari lebih lanjut
          </Link>
        </div>
        <img
          src={hand}
          width={550}
          className="pl-12 hidden sm:block"
          alt="tangan"
        />
        <Link to="https://discord.gg/kDBejsNU"
          className="w-fit mx-4 mt-10 inline-flex flex-col items-center shadow-xl sm:hidden bg-[#B1AFFF] rounded-xl overflow-hidden">
          <img
            src={anonim}
            alt="anonim gambar"
            className="block sm:hidden w-auto"
          />
          <h1
            className="text-2xl my-3 font-bold text-[#FFE9D0]"
          >
            Anonymous Chat
          </h1>
        </Link>
        <h1 id="konselor" className=" block sm:hidden mt-12 mb-5 text-4xl font-prequel text-[#8D493A] font-semibold">Konselor Sebaya</h1>

        <div className="inline-flex sm:hidden flex-col w-full items-center gap-y-7">
          {listItem}
        </div>
      </div>
      <div className="block sm:hidden my-10">
        <h1 className="flex items-center text-xs gap-x-2">
          <FaRegCopyright /> 2024 PPK Ormawa HIMFA, All Rights Reserved.
        </h1>
      </div>
    </>
  );
}

export default HomePage;
