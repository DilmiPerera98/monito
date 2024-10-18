import gift from "../Icons/gift.png";
export default function Product() {
  return (
    <div className="w-280 h-378 mt-5 ml-5 rounded-2xl p-2 gap-2 bg-nuetral-0 boxShadow-custom">
      <img src="" alt="product" className="w-264 h-264 rounded-xl" />
      <div className="w-264 h-98 p-2 pb-5 gap-4">
        <div className="w-248 h-70 gap-1">
          <p className="font-gilroy text-base text-bold text-nuetral-100 leading-6"></p>
          <div className="flex gap-1">
            <span className="font-gilroy text-xs text-bold gap-1.5 text-nuetral-60  leading-6"></span>
            <span>.</span>
            <span className="font-gilroy text-xs text-bold gap-1.5 text-nuetral-60  leading-6"></span>
          </div>
          <p className="font-gilroy text-base text-bold text-nuetral-100 leading-6"></p>
          <div className="flex h-34 w-248 rounde-lg p-1.5_2.5_1_2.5 gap-0.5 bg-monYellow-40">
            <img src={gift} alt="" className="w-5 h-5" />
            <span>.</span>
            <span className="font-gilroy text-base text-bold text-nuetral-100 leading-6"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
