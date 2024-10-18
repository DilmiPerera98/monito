import logo from "../images/logo.png";
import Search from "./search.jsx";

export default function Header() {
  return (
    <header className="fixed w-full z-50">
      <div className="flex relativs justify-between items-center mx-auto w-[1440px] h-[100px]  pt-7 pb-7 pr-32 pl-32 ">
        <img src={logo} alt="logo" className="h-40 w-115" />

        <ul className="flex gap-12 s]">
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

        <Search />

        <button
          className="w-203 h-44 rounded-[57px] bg-[#003459]
            pt-[14px] pr-6 pb-[10px] pl-6
            gap-[10px] flex items-center font-bold text-base leading-5 text-left text-neutral-50"
        >
          Join the community
        </button>
      </div>
    </header>
    // <section className="flex justify-center mx-auto">
    //   <header className="z-10 fixed  bg-monYellow-40 w-[1440px] h-[100px]  pt-7 pb-7 pr-32 pl-32 ">
    //     <div className="flex justify-between items-center ">
    //       <img src={logo} alt="logo" className="h-40 w-115" />

    // <ul className="flex gap-12 max-w-[366px] max-h-[24px]">
    //   <li className="text-[16px] font-bold leading-[24px] text-[#003459]">
    //     Home
    //   </li>
    //   <li className="text-[16px] font-bold leading-[24px] text-[#003459]">
    //     Category
    //   </li>
    //   <li className="text-[16px] font-bold leading-[24px] text-[#003459]">
    //     About
    //   </li>
    //   <li className="text-[16px] font-bold leading-[24px] text-[#003459]">
    //     Content
    //   </li>
    // </ul>

    //       <Search />

    // <button
    //   className="w-203 h-44 rounded-[57px] bg-[#003459]
    //   pt-[14px] pr-6 pb-[10px] pl-6
    //   gap-[10px] flex items-center font-bold text-base leading-5 text-left text-neutral-50"
    // >
    //   Join the community
    // </button>
    //     </div>
    //   </header>
    // </section>
  );
}
