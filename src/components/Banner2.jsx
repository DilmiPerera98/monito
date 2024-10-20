import paw from "../images/paw.png";
import handPaw from "../images/handPaw.png";

export default function Banner2() {
  return (
    <section className="w-full relative z-70">
      <div className="relative overflow-hidden justify-between items-center mx-auto w-[382px] sm:w-1180 h-[640px] sm:h-378 rounded-bl-[40px] flex-col-reverse flex sm:grid gap-8 sm:grid-cols-2 sm:pl-32 sm:pr-32 rounded-20 z-60   bg-[#FFB775]">
        <div className="sm:max-w-6xl  relative z-60 flex flex-col items-left gap-3 pt-4 mt-6 sm:pt-0">
          <div className="flex gap-2.5 items-center w-[465px] h-[54px] sm:h-[68px] sm:top-[180px] sm:left-[130px] text-4xl sm:text-52 leading-[54px] sm:leading-[68px] font-extrabold font-gilroy">
            Adoption
            <img className="w-[30px] sm:w-42 sm:h-38" src={paw} alt="" />
          </div>

          <p className="h-[36px] sm:h-[60px] sm:top-[252px] sm:left-[130px] text-2xl sm:text-4xl leading-[36px] sm:leading-54 font-bold font-gilroy">
            We Need Help.So Do They.
          </p>
          <p className="h-[54px] sm:h-[72px] sm:top-[336px] flex justify-left font-medium text-xs sm:text-[16px] leading-[18px] sm:leading-[24px] p-2 text-wrap">
            Adopt a pet and give it a home. <br />
            It will be love you back unconditinally.
          </p>
          <div className="flex  gap-[8px] mt-[14px]">
            <button
              className="w-[161px] sm:w-203 h-[48px] sm:h-44 rounded-[57px] border-[1.5px] border-darkBlue-0
       [14px_28px_10px_28px] gap-2
        sm:gap-[10px] flex items-center justify-center font-bold text-base leading-5 text-darkBlue-0 "
            >
              View Intro
            </button>
            <button
              className="w-[161px] sm:w-203 h-[48px] sm:h-44 rounded-[57px] bg-[#003459]
        pt-[14px] pr-6 pb-[10px] pl-6
        flex items-center justify-center  font-bold text-base leading-5 text-neutral-50"
            >
              Explore Now
            </button>
          </div>
        </div>

        <div className="">
          <img
            src={handPaw}
            className="h-[378.79px] w-[538.53px] relative z-20 left-20"
            alt=""
          />
          <span className="z-0 absolute w-[787px] h-[635px] rounded-99 bg-[#FDE8C7] top-[-210px] left-[-140px] rotate-rotate154" />
          <span className="absolute w-782.29 h-635 rounded-99 bg-monYellow-0 rotate-rotate154 top-[180px] left-[676px] z-0" />
        </div>
      </div>
    </section>
  );
}
