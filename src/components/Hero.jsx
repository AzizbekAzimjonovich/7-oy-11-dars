import React, { useState } from "react";
import next from "../assets/icon-next.svg";
import prev from "../assets/icon-previous.svg";

import hero1 from "../assets/image-product-1.jpg";
import hero2 from "../assets/image-product-2.jpg";
import hero3 from "../assets/image-product-3.jpg";
import hero4 from "../assets/image-product-4.jpg";
const images = [hero1, hero2, hero3, hero4];
import smhero1 from "../assets/image-product-1-thumbnail.jpg";
import smhero2 from "../assets/image-product-2-thumbnail.jpg";
import smhero3 from "../assets/image-product-3-thumbnail.jpg";
import smhero4 from "../assets/image-product-4-thumbnail.jpg";
const smImages = [smhero1, smhero2, smhero3, smhero4];

import plus from "../assets/icon-plus.svg";
import minus from "../assets/icon-minus.svg";
function Hero() {
  const [img, setImg] = useState(images[1]);
  const [imgSm, setImgSm] = useState(smImages[1]);
  const [count, setCount] = useState(0);

  function setImage(e, index) {
    setImg(images[index]);
    setImgSm(images[index]);
  }

  const incrementFunc = () => {
    setCount(count + 1);
  };

  const decrementFunc = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  function handleSubmit(e) {
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.reload();
  }

  const cart = {
    image: imgSm,
    price: 125.0,
    title: "Fall Limited Edition Sneakers",
    count: count,
  };

  return (
    <div className="flex flex-col lg:flex-row lg:justify-center lg:gap-32 mt-20">
      <div className="w-full lg:w-96 lg:h-96">
        <button
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          <img className="rounded-lg mb-3 w-full" src={img} alt="" />
        </button>
        <dialog
          id="my_modal_3"
          className="modal bg-black bg-opacity-60 flex items-center justify-center"
        >
          <div className="modal-box border-none overflow-hidden bg-transparent rounded-lg lg:grid">
            <form method="dialog flex">
              <button className="btn btn-sm bg-inherit border-none  hover:text-orange-400 hover:bg-inherit">
                ✕
              </button>
            </form>

            <div>
              <img src={img} alt="" className="rounded-lg w-full" />
              <button className="relative rounded-full w-12  h-12 btn bottom-64 right-5 ">
                <img src={prev} alt="" />
              </button>
              <button className="relative rounded-full w-12 h-12 btn   left-96 bottom-64">
                <img src={next} alt="" />
              </button>
            </div>
            <div className="mt-[-15px] lg:grid grid-cols-4 gap-8 md:hidden sm:hidden">
              {smImages.map((smImage, index) => (
                <img
                  className="rounded-lg cursor-pointer"
                  key={smImage}
                  onClick={(e) => setImage(e, index)}
                  src={smImage}
                  alt=""
                />
              ))}
            </div>
          </div>
        </dialog>
        <div className=" lg:grid grid-cols-4 gap-8  sm:hidden md:hidden">
          {smImages.map((smImage, index) => (
            <img
              className="rounded-lg cursor-pointer"
              key={smImage}
              onClick={(e) => setImage(e, index)}
              src={smImage}
              alt=""
            />
          ))}
        </div>
      </div>
      <div className="w-full lg:w-96 md:w-3/4">
        <span className="text-warning font-medium">sneaker company</span>
        <h1 className="font-bold text-4xl mt-7 mb-8">
          Fall Limited Edition Sneakers
        </h1>
        <p className="text-neutral-content text-sm mb-6">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
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
            <button>
              <img src={minus} onClick={decrementFunc} alt="" />
            </button>
            <span>{count}</span>
            <button onClick={incrementFunc}>
              <img src={plus} alt="" />
            </button>
          </div>
          <button
            onClick={(e) => handleSubmit(e)}
            className="flex items-center btn w-full sm:w-56 bg-orange-400"
          >
            <img src="./public/icon-cart.svg" alt="" />
            <span className="text-white ">Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
