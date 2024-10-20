export default function Pet({ pet }) {
  return (
    <div className="w-[185px] sm:w-280 h-[330px] sm:h-378 mb-5 rounded-2xl p-2 gap-2 bg-nuetral-0 shadow-xl boxShadowColor-shadowColor">
      <img
        src={pet.image}
        alt="product"
        className="w-[169px] sm:w-264 h-[196px] sm:h-264 rounded-xl"
      />
      <div className="w-[169px] sm:w-264 h-[124px] sm:h-98 p-2 pb-5 gap-2">
        <div className="sm:w-248 sm:h-70 gap-1">
          <p className="font-gilroy text-sm text-bold text-nuetral-100 leading-5">
            {pet.id} - {pet.breed}
          </p>
          <div className="sm:flex justify-between gap-1">
            <div className="font-gilroy text-xs text-bold gap-1.5 text-nuetral-60  leading-6">
              Gene:{pet.gender}
            </div>
            <div className="hidden sm:flex items-center justify-center font-bold sm:w-3 sm:h-3">
              .
            </div>
            <span className="font-gilroy text-xs text-bold gap-1.5 text-nuetral-60  leading-6">
              Age:{pet.age}
            </span>
          </div>
          <p className="font-gilroy text-base text-bold text-nuetral-100 leading-6">
            {pet.price}
          </p>
        </div>
      </div>
    </div>
  );
}
