import { useState, useEffect } from "react";
import Pet from "./Pet";

export default function PetHolder() {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch(
          "https://monitor-backend-rust.vercel.app/api/pets"
        );
        if (!response.ok) {
          throw new Error("Error fetching the pets");
        }
        const data = await response.json();
        setPets(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPets();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="w-full relative z-100">
      <div className="relative justify-between mx-auto w-full sm:w-1180 pt-20 pb-16 z-60 bg-white">
        <div>
          <p className="font-gilroy text-sm sm:text-base text-medium leading-6 text-black">
            Whats new?
          </p>
          <div className="flex justify-between">
            <p className="font-gilroy text-xl sm:text-2xl text-bold leading-9 text-darkBlue-80">
              Take A Look At Some of Our Pets
            </p>
            <span className="hidden sm:flex ">
              <button
                className="w-203 h-44 rounded-[57px] border-[1.5px] border-darkBlue-0
       [14px_28px_10px_28px]
        gap-[10px] flex items-center justify-center font-bold text-base leading-5 text-darkBlue-0"
              >
                View Intro
              </button>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4">
          {pets.map((pet) => (
            <Pet key={pet.id} pet={pet} />
          ))}
        </div>

        <button
          className="sm:hidden w-[382px] h-[48px] rounded-[57px] border-[1.5px] border-darkBlue-0 pt-[14px] pr-[28px] pb-[10px] pl-[28px] m-3
        gap-2 flex items-center justify-center font-bold text-base leading-5 text-darkBlue-0 "
        >
          View Intro
        </button>
      </div>
    </section>
  );
}
