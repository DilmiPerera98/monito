import PageDescription from "./PageDescription";
import Picture from "./Picture";

export default function HomeCard() {
  return (
    <section className="w-full">
      <div className="flex relative justify-between items-center mx-auto w-[1440px] h-[695px] rounded-bl-[40px] rounded-br-[40px] bg-monYellow-40 grid gap-8 sm:grid-cols-2 pl-32 pr-32">
        <PageDescription />
        <Picture></Picture>
      </div>
    </section>
  );
}
