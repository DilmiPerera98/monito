import PageDescription from "./PageDescription";

export default function OneMoreFriendCard() {
  return (
    <section className="w-full">
      <div className="flex relative justify-between items-center mx-auto w-1180 h-[695px] rounded-bl-[40px] rounded-br-[40px] bg-[#003459] grid gap-8 sm:grid-cols-2 pl-32 pr-32 rounded-20">
        <div>
          <span className="absolute w-635 h-635  rounded-99 rotate-rotateBlue bg-darkBlue-0 " />
          <span className="absolute w-782.29 h-635 rounded-[99px] bg-monYellow-0 rotate-[-25.23deg] top-[-360px] left-[776.67px]" />
          <img
            src="https://s3-alpha-sig.figma.com/img/035a/16de/8e1aa9a0522d0cebb4144a5ceda0344a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jcdDX74Fn7GRbLWtG2o5I-JMBAl1s83D4VZIzTCsZcDD96AzkmiUIFw8tOTyVDLu5Q0V-7l~qe4NTOnsRbplM2WCYQ8uU4uQZuI2ERzkh8aCOx2eUc8aHcdulR3UZqoAieNs-j7x5J-rU1oCSJIOSaxbdFqlYJndhqhxrmOkwyzpe3N2QtUeYxLgYKi~lIgaiooexRFDYaTS~4PzLIjcbhGcY14lw92M1YKpOamKm5iVGDZKQtPFO5kCLq86P1mW1KkDDLYzwlHv22y9GxqoXmyWskUbC7~AepKsFWpdH4paQUDMTQ-LpAK6yqzpObSrNK93sxBfwUtDeH7eoem2ZQ__"
            className="absolute"
          />
        </div>
        <PageDescription />
      </div>
    </section>
  );
}
