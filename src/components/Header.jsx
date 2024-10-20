import logo from "../images/logo.png";
import search from "../Icons/search.png";
import Search from "./search.jsx";
import { useState } from "react";
import "swiper/css";
import { FaBars } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed w-full z-100">
      <div className="flex justify-between items-center mx-auto w-full h-[100px] pt-7 pb-7 px-6 sm:px-32">
        {/* Menu icon for mobile */}
        <div className="block md:hidden">
          <button onClick={toggleMenu} className="text-[#003459] text-2xl">
            <FaBars />
          </button>
        </div>

        {/* Logo */}
        <div className="flex justify-center items-center w-full sm:w-auto sm:justify-start">
          <img src={logo} alt="logo" className="h-40 w-115" />
        </div>

        {/* Full menu for desktop, hidden on mobile */}
        <ul className="hidden sm:flex gap-12">
          <li className="text-[16px] font-bold leading-[24px] text-[#003459]">
            Home
          </li>
          <li className="text-[16px] font-bold leading-[24px] text-[#003459]">
            Category
          </li>
          <li className="text-[16px] font-bold leading-[24px] text-[#003459]">
            About
          </li>
          <li className="text-[16px] font-bold leading-[24px] text-[#003459]">
            Content
          </li>
        </ul>

        {/* Search component for desktop, search icon for mobile */}
        <div className="hidden sm:block">
          <Search />
        </div>
        <div className="block sm:hidden">
          <button className="text-[#003459] text-2xl w-[23px] h-[23px] font-extrabold">
            <img src={search} className="w-[23px] h-[23px] font-extrabold" />
          </button>
        </div>

        {/* "Join the community" button for desktop, hidden on mobile */}
        <button
          className="hidden sm:flex w-203 h-44 rounded-[57px] bg-[#003459]
          pt-[14px] pr-6 pb-[10px] pl-6 gap-[10px] items-center font-bold text-base leading-5 text-neutral-50"
        >
          Join the community
        </button>
      </div>

      {/* Mobile menu with Swiper */}
      {menuOpen && (
        <div className="sm:hidden absolute top-[80px] left-0 w-[200px] bg-white shadow-lg gap-2 p-2.5 border-nuetral-20 rounded-3xl">
          <div className="swiper ">
            <div className="swiper-slide pt-2.5 pr-3 pb-2 pl-5">
              <li className="text-[16px] font-bold leading-[24px] text-[#003459]">
                Home
              </li>
            </div>
            <div className="swiper-slide pt-2.5 pr-3 pb-2 pl-5">
              <li className="text-[16px] font-bold leading-[24px] text-[#003459]">
                Category
              </li>
            </div>
            <div className="swiper-slide pt-2.5 pr-3 pb-2 pl-5">
              <li className="text-[16px] font-bold leading-[24px] text-[#003459]">
                About
              </li>
            </div>
            <div className="swiper-slide pt-2.5 pr-3 pb-2 pl-5">
              <li className="text-[16px] font-bold leading-[24px] text-[#003459]">
                Content
              </li>
            </div>
          </div>
        </div>
      )}
    </header>
    // <header className="fixed w-full z-100">
    //   <div className="flex relativs justify-between items-center mx-auto w-[1440px] h-[100px]  pt-7 pb-7 pr-32 pl-32 ">
    //     <img src={logo} alt="logo" className="h-40 w-115" />

    //     <ul className="flex gap-12 s]">
    //       <li className="text-[16px] font-bold leading-[24px] text-[#003459]">
    //         Home
    //       </li>
    //       <li className="text-[16px] font-bold leading-[24px] text-[#003459]">
    //         Category
    //       </li>
    //       <li className="text-[16px] font-bold leading-[24px] text-[#003459]">
    //         About
    //       </li>
    //       <li className="text-[16px] font-bold leading-[24px] text-[#003459]">
    //         Content
    //       </li>
    //     </ul>

    //     <Search />

    //     <button
    //       className="w-203 h-44 rounded-[57px] bg-[#003459]
    //         pt-[14px] pr-6 pb-[10px] pl-6
    //         gap-[10px] flex items-center font-bold text-base leading-5 text-left text-neutral-50"
    //     >
    //       Join the community
    //     </button>
    //   </div>
    // </header>
  );
}
