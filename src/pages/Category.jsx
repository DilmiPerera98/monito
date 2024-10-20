import PetHolder from "../components/PetHolder";
import Banner3 from "../components/Banner3";

export default function Category() {
  return (
    <div className="justify-between mx-auto relative">
      <div className="bg-white">
        <Banner3 />
        <PetHolder />
      </div>
    </div>
  );
}
