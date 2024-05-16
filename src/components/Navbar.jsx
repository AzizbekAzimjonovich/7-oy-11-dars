import React, { useState, useEffect } from "react";
import cart from "../assets/icon-cart.svg";
import user from "../assets/image-avatar.png";

function Navbar() {
  const [cartCount, setCartCount] = useState(0);
  const [price, setPrice] = useState(0.0);
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");

  const totalPrice = cartCount * price;

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      const { count, price, title, image } = JSON.parse(storedCart);
      setTitle(title);
      setCartCount(count);
      setPrice(price);
      setImg(image);
    }
  }, []);

  return (
    <>
      <div className="navbar align-content  p-3 pb-8 border-b border-base-300 max-w-6xl ml-auto mr-auto">
        <div className="navbar-start">
          <span className="font-bold leading-5 text-2xl">SNEAKERS</span>
        </div>
        <div className="mr-80 hidden lg:flex">
          <ul className="flex gap-8 aligin-items-center">
            <li className="cursor-pointer hover: border-b-2 border-transparent hover:border-orange-500 pb-10 mt-10">
              Collections
            </li>
            <li className="cursor-pointer hover: border-b-2 border-transparent hover:border-orange-500 pb-10 mt-10">
              Men
            </li>
            <li className="cursor-pointer hover: border-b-2 border-transparent hover:border-orange-500 pb-10 mt-10">
              Women
            </li>
            <li className="cursor-pointer hover:border-b-2 border-transparent hover:border-orange-500 pb-10 mt-10">
              About
            </li>
            <li className="cursor-pointer hover: border-b-2 border-transparent hover:border-orange-500 pb-10 mt-10">
              Contact
            </li>
          </ul>
        </div>
        <div className="flex-grow" />
        <div className="navbar-end flex items-center gap-10">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <span className="indicator-item badge badge-secondary">
                  {cartCount}
                </span>
                <img src={cart} alt="" />
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-80"
            >
              <div className="">
                <h2 className="card-title border-b pb-4">Cart</h2>
                <div className="w-full flex flex-col items-center justify-center p-5">
                  {cartCount === 0 && <span>Your cart is empty</span>}
                  {cartCount > 0 && (
                    <div className="">
                      <div className="flex justify-center items-center gap-5 mb-4">
                        <img
                          src={img}
                          alt=""
                          className="rounded-lg w-12 h-12"
                        />
                        <div>
                          <h3 className="text-base-content">{title}</h3>
                          <span className="text-base text-base-content mr-2">
                            ${price}*{cartCount}
                          </span>
                          <span className="font-bold text-base ">
                            ${totalPrice}
                          </span>
                        </div>
                      </div>
                      <button className=" w-full btn bg-orange-400 text-white">
                        Checkout
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className=" cursor-pointer w-10 border-2 transition rounded-full hover:border-orange-400">
            <img alt="Tailwind CSS Navbar component" src={user} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
