import logo from "../images/logo.png";
import fb from "../images/fb.png";
import twitter from "../images/twitter.png";
import insta from "../images/insta.png";
import youtube from "../images/youtube.png";

export default function Footer() {
  return (
    <footer className="relative bg-monYellow-40 rounded-tl-[40px] rounded-tr-[40px] mx-auto w-[414px] sm:w-1440 h-[598px] sm:h-440 pt-16 z-100">
      <div className="relative justify-between items-center mx-auto w-full sm:w-1180">
        <div className="">
          {/* register now card */}
          <div className="grid sm:grid-cols-3 z-50 justify-between items-center bg-darkBlue-0 rounded-3xl p-4 sm:p-8 gap-4 sm:gap-8 mx-auto w-[382px] sm:h-[136px] h-[244px] sm:w-1180">
            <p className="h-72 font-gilroy font-bold text-xl text-nuetral-0 leading-8 col-span-1 w-[350px] sm:w-389">
              Register Now so You Don't miss Our Programs
            </p>
            <form
              action=""
              className="flex flex-col sm:flex-row justify-center w-[350px] sm:w-[707px] h-[132px] sm:h-72 bg-white rounded-14 p-3 gap-y-3 sm:gap-3 sm:col-span-2"
            >
              <input
                type="text"
                placeholder="Enter your Email Address"
                className="w-[326px] sm:w-508 h-48 rounded-lg border border-nuetral-40 pt-[14px] pr-6 pb-[10px] pl-6 font-gilroy font-medium text-sm leading-5"
              />
              <button
                className="w-[326px] sm:w-[163px] h-48 rounded-lg bg-[#003459]
            pt-[14px] pr-6 pb-[10px] pl-6
            gap-[10px] flex items-center justify-center font-medium text-base leading-5 text-center sm:text-left text-neutral-50 "
              >
                Subscribe Now
              </button>
            </form>
          </div>
          <div className="m-8 gap-[20px] sm:gap-[562px] pb-10 mx-auto w-[382px] sm:w-1180  flex flex-col sm:flex-row relative z-50 justify-between items-center border-b border-nuetral-20">
            <ul className="flex flex-row gap-[40px] sm:gap-[62px] sm:max-w-[366px]">
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

            <ul className="flex flex-row gap-10">
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
        </div>

        <div className="m-8 mb-0 gap-1 sm:gap-8 mx-auto w-full sm:w-1180 flex flex-col sm:flex-row relative z-50 justify-between items-center">
          <p className="order-3 sm:order-1 h-5 font-gilroy text-[10px] sm:text-sm *:first-letter:text-neutral-60 leading-4">
            @2022 Monito. All rights reserved.
          </p>

          <img
            src={logo}
            alt="logo"
            className="order-1 sm:order-2 h-40 w-115 mx-auto sm:mx-0"
          />

          <div className="flex gap-10 order-2 sm:order-3 mt-4 sm:mt-0">
            <span className="h-5 font-gilroy text-xs sm:text-sm text-neutral-60 leading [18px] sm:leading-5">
              Terms of Service
            </span>
            <span className="h-5 font-gilroy text-xs sm:text-sm  text-neutral-60 leading [18px] sm:leading-5">
              Privacy Policy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
