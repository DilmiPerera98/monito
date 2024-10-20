import PageDescription from "./PageDescription";
import Picture from "./Picture";

export default function HomeCard() {
  return (
    <section className="w-full">
      <div className="flex relative justify-between items-center mx-auto w-full sm:w-[1440px] h-[605px] sm:h-[695px] rounded-bl-[40px] rounded-br-[40px] bg-monYellow-40 grid gap-8 grid-rows-2 md:grid-cols-2 sm:pl-32 sm:pr-32 z-6 sm:pt-36 overflow-hidden">
        <PageDescription />
        <Picture></Picture>
      </div>
    </section>
  );
}
