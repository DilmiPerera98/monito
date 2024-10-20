import HomeCard from "../components/homeCard";
import Banner1 from "../components/Banner1";
import Banner2 from "../components/Banner2";
import ProductHolder from "../components/ProductHolder";
import PetHolder from "../components/PetHolder";

export default function Home() {
  return (
    <div className="justify-between mx-auto relative">
      <HomeCard />
      <div className="bg-white">
        <PetHolder />
        <Banner1 />
        <ProductHolder />
        <Banner2 />
        <ProductHolder />
      </div>
    </div>
  );
}
