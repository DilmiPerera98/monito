export default function PageDescription() {
  return (
    <div className="sm:max-w-6xl w-full relative p-1 items-center gap:5 pt-20">
      <p className="sm:h-[68px] sm:top-[180px] top-[139px] sm:left-[130px] text-wra1 text-[41px] sm:text-[60px] leading-[60px] sm:leading-[68px] font-extrabold font-gilroy">
        One More Friend
      </p>
      <p className="sm:h-[60px] sm:top-[252px] sm:left-[130px] sm:text-[46px] text-[28px] sm:leading-[60px] leading-[38px] font-bold font-gilroy">
        Thousands More Fun!
      </p>
      <p className="sm:w-[480px] sm:h-[72px] sm:top-[336px] sm:left-[130px] sm:font-medium sm:text-[16px] text-[12px] sm:leading-[24px] leading-[18px]">
        Having a pet means you have more joy, a new friend, a happy person who
        will always be with you to have fun. We have 200+ different pets that
        can meet your needs!
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
  );
}
