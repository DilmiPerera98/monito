import gift from "../Icons/gift.png";
export default function Product({ product }) {
  return (
    <div className="w-[185px] h-[380px] sm:w-[280px] mb-5 sm:h-[446px] rounded-2xl p-2 gap-2 bg-nuetral-0 shadow-xl boxShadowColor- ml-2">
      <img
        src={product.image}
        alt="product"
        className="w-[169px] sm:w-264 h-[169px] sm:h-264 rounded-xl"
      />
      <div className="sm:w-264 sm:h-98 p-2 pb-5 gap-2">
        <div className="sm:w-248 h-70 gap-1">
          <p className="font-gilroy text-sm sm:h-[48px] sm:text-bold text-nuetral-100 leading-6">
            {product.name}
          </p>
          <div className="sm:flex gap-1 justify-between">
            <div className="font-gilroy text-xs text-bold gap-1.5 text-nuetral-60  leading-6">
              Product:{product.product}
            </div>
            <div className="hidden sm:flex items-center justify-center font-bold w-3 h-3">
              .
            </div>
            <span className="font-gilroy text-xs text-bold gap-1 text-nuetral-60  leading-6">
              Size:{product.size}
            </span>
          </div>
          <p className="font-gilroy text-base text-bold text-nuetral-100 leading-6">
            {product.price}
          </p>
          <div className="flex items-center sm:h-[44px] sm:w-248 rounde-lg pt-[6px] pr-[10px] pb-[4px] pl-[10px] gap-1 bg-monYellow-40">
            <img
              src={gift}
              alt=""
              className="flex items-center justify-center w-[20px] h-[20px]"
            />
            <span className="flex items-center justify-center font-bold w-3 h-3">
              .
            </span>
            <span className="font-gilroy text-sm text-bold text-nuetral-100 leading-6 flex items-center justify-center">
              {product.description}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
