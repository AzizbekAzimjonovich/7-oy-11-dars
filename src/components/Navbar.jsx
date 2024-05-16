import cart from "../assets/icon-cart.svg";
import user from "../assets/image-avatar.png";
import menu from "../assets/icon-menu.svg";
import React, { useState, useEffect } from "react";

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

  const handleDelete = () => {
    localStorage.removeItem("cart");
    window.location.reload();
  };
  return (
    <>
      <div>
        <div className="navbar align-element p-3 pb-8 border-b border-base-300">
          <div className="navbar-start">
            <span className="font-bold leading-5 text-2xl">SNEAKERS</span>
          </div>
          <div className="mr-80 hidden lg:flex">
            <ul className="flex gap-8 ">
              <li className="cursor-pointer">Collections</li>
              <li className="cursor-pointer">Men</li>
              <li className="cursor-pointer">Women</li>
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Contact</li>
            </ul>
          </div>
          <div className="navbar-end">
            <div className="flex gap-10 items-center">
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
        </div>
      </div>
    </>
  );
}

export default Navbar;
