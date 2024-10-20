import banner from "../images/banner1.png";

export default function Banner1() {
  return (
    <section className="w-full relative">
      <div className="relative overflow-hidden justify-between items-center mx-auto w-[382px] sm:w-1180 h-[640px] sm:h-378 rounded-bl-[40px]  bg-[#003459] flex-col-reverse flex sm:grid gap-8 sm:grid-cols-2 sm:pl-32 sm:pr-32 rounded-20 z-50">
        <div className="sm:order-1">
          <img
            src={banner}
            className="h-[342px] w-[513px] relative z-20 top-[20px]"
            alt=""
          />
          <span className="z-0 absolute w-[787.54px] sm:w-[787px] h-[787.54px] sm:h-[787px] rounded-99 bg-darkBlue-80 sm:top-[250.72px] top-[500.72px] sm:left-[-120px] left-[-201.49px] rotate-rotateYellow" />
        </div>

        <div className="sm:order-2  ">
          <span className="absolute w-[605.03px] sm:w-782.29 h-[635px] sm:h-635 rounded-[75px] sm:rounded-99 bg-monYellow-40 rotate-rotateYellow  top-[-270px] sm:top-[-180px] left-[-60px] sm:left-[576px] z-0" />

          <div className="sm:max-w-6xl relative flex flex-col items-center sm:items-end gap-3 pt-4 mt-6 sm:pt-0">
            <p className="h-[54px] sm:h-[68px] sm:top-[180px] sm:left-[130px] text-4xl sm:text-52 leading-[54px] sm:leading-[68px] font-extrabold text-nowrap font-gilroy">
              One More Friend
            </p>
            <p className="h-[36px] sm:h-[60px] sm:top-[252px] sm:left-[130px] text-2xl sm:text-4xl leading-[36px] sm:leading-54 font-bold font-gilroy">
              Thousands More Fun!
            </p>
            <p className="h-[54px] sm:h-[72px] sm:top-[336px] flex justify-center sm:justify-end font-medium text-xs sm:text-[16px] leading-[18px] sm:leading-[24px] p-2">
              Having a pet means you have more joy, a new friend, a happy person
              who will always be with you to have fun. We have 200+ different
              pets that can meet your needs!
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
        </div>
      </div>
    </section>
  );
}
