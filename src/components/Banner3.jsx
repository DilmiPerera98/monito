import banner from "../images/banner3.png";

export default function Banner3() {
  return (
    <section className="w-full relative">
      <div className="relative overflow-hidden justify-between items-center mx-auto w-[382px] sm:w-1180 h-[640px] sm:h-378 rounded-bl-[40px] rounded-br-[40px] bg-monYellow-40 flex-col-reverse flex sm:grid gap-8 sm:grid-cols-2 pl-32 pr-32 rounded-20 z-50">
        <div className="order-2">
          <img
            src={banner}
            className="h-[301px] w-[650px] relative z-20 top-[60px] left-[-50px]"
            alt=""
          />
          <span className="z-0 absolute w-[814.4px] h-[799.52px] rounded-99 bg-darkBlue-80 top-[-84px] left-[467.23px] rotate-[160.22deg]" />
        </div>

        <div className="order-1">
          <div className="max-w-6xl relative flex flex-col items-end">
            <p className="h-[68px] top-[180px] left-[130px] text-52 leading-[68px] font-extrabold text-nowrap font-gilroy text-white">
              One More Friend
            </p>
            <p className=" h-[60px] top-[252px] left-[130px] text-4xl leading-54 font-bold font-gilroy text-white">
              Thousands More Fun!
            </p>
            <p className="flex justify-end h-[72px] top-[336px] font-medium text-[16px] leading-[24px] text-white">
              Having a pet means you have more joy, a new friend, a happy person
              who will always be with you to have fun. We have 200+ different
              pets that can meet your needs!
            </p>
            <div className="flex  gap-[8px] mt-[14px]">
              <button
                className="w-203 h-44 rounded-[57px] border-[1.5px] border-white
       [14px_28px_10px_28px]
        gap-[10px] flex items-center justify-center font-bold text-base leading-5 text-white "
              >
                View Intro
              </button>
              <button
                className="w-203 h-44 rounded-[57px] bg-white pt-[14px] pr-6 pb-[10px] pl-6
        flex items-center justify-center  font-bold text-base leading-5 text-[#003459]"
              >
                Explore Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
