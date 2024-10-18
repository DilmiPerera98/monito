import logo from "../images/logo.png";
import fb from "../images/fb.png";
import twitter from "../images/twitter.png";
import insta from "../images/insta.png";
import youtube from "../images/youtube.png";

export default function Footer() {
  return (
    <footer className="relative bg-monYellow-40 rounded-tl-[40px] rounded-tr-[40px] mx-auto w-1440 h-440 pt-16">
      <div className="relative z-50 justify-between items-center mx-auto w-1180">
        {/* register now card */}
        <div className="grid grid-cols-3 z-50 justify-between items-center bg-darkBlue-0 rounded-3xl p-8 gap-8 mx-auto w-1180">
          <p className="h-72 font-gilroy font-bold text-2xl text-nuetral-0 leading-8 col-span-1 w-389">
            Register Now so You Don't miss Our Programs
          </p>
          <form
            action=""
            className="flex justify-center h-72 bg-white rounded-14 p-3 gap-3 col-span-2"
          >
            <input
              type="text"
              placeholder="Enter your Email Address"
              className="w-508 h-48 rounded-lg border border-nuetral-40 p-[14px_28px] font-gilroy font-medium text-sm leading-5"
            />
            <button
              className="h-48 rounded-lg bg-[#003459]
            pt-[14px] pr-6 pb-[10px] pl-6
            gap-[10px] flex items-center font-medium text-base leading-5 text-left text-neutral-50"
            >
              Subscribe Now
            </button>
          </form>
        </div>
        <div className="m-8 gap-[562px] pb-10 mx-auto w-1180 flex relative z-50 justify-between items-center border-b border-nuetral-20">
          <ul className="flex gap-[62px] max-w-[366px]">
            <li className="text-base font-bold leading-6 text-nuetral-100]">
              Home
            </li>
            <li className="text-base font-bold leading-6 text-nuetral-100]">
              Category
            </li>
            <li className="text-base font-bold leading-6 text-nuetral-100]">
              About
            </li>
            <li className="text-base font-bold leading-6 text-nuetral-100]">
              Content
            </li>
          </ul>

          <ul className="flex gap-10">
            <li>
              <img src={fb} className="w-6 h-6"></img>
            </li>
            <li>
              <img src={twitter} className="w-6 h-6"></img>
            </li>
            <li>
              <img src={insta} className="w-6 h-6"></img>
            </li>
            <li>
              <img src={youtube} className="w-6 h-6"></img>
            </li>
          </ul>
        </div>

        <div className="m-8 gap-8 mx-auto w-1180 flex relative z-50 justify-between items-center ">
          <p className="h-5 font-gilroy text-sm text-nuetral-60 leading-5">
            @2022 Monito. All rights reserved.
          </p>
          <img src={logo} alt="logo" className="h-40 w-115" />
          <div className="flex gap-10">
            <span className="h-5 font-gilroy text-sm text-nuetral-60 leading-5">
              Terms of Service
            </span>
            <span className="h-5 font-gilroy text-sm text-nuetral-60 leading-5">
              Privacy Policy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
