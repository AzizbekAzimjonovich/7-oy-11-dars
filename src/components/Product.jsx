import React from "react";
import plus from "../assets/icon-plus.svg";
import minus from "../assets/icon-minus.svg";
import cartIcon from "../assets/icon-cart.svg";

function Product({ count, incrementFunc, decrementFunc, handleSubmit }) {
  return (
    <div className="w-full lg:w-96 md:w-3/4">
      <span className="text-warning font-medium">sneaker company</span>
      <h1 className="font-bold text-4xl mt-7 mb-8">
        Fall Limited Edition Sneakers
      </h1>
      <p className="text-neutral-content text-sm mb-6">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div>
        <div className="flex gap-2 items-start">
          <span className="text-2xl font-medium mb-3">$125.00</span>
          <span className="text-warning font-medium bg-orange-100 rounded p-1">
            50%
          </span>
        </div>
        <p className="line-through text-base-300 mb-8">$250.00</p>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
        <div className="flex items-center gap-10 bg-slate-100 p-3 rounded-lg mb-4 sm:mb-0">
          <button onClick={decrementFunc}>
            <img src={minus} alt="Miqdorni kamaytirish" />
          </button>
          <span>{count}</span>
          <button onClick={incrementFunc}>
            <img src={plus} alt="Miqdorni oshirish" />
          </button>
        </div>
        <button
          onClick={handleSubmit}
          className="flex items-center btn w-full sm:w-56 bg-orange-400"
        >
          <img src={cartIcon} alt="Savatcha" />
          <span className="text-white">Add to Cart</span>
        </button>
      </div>
    </div>
  );
}

export default Product;
