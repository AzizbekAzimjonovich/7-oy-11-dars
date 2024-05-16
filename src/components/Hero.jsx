import { useState } from "react";

import product1 from "../assets/image-product-1.jpg";
import product2 from "../assets/image-product-2.jpg";
import product3 from "../assets/image-product-3.jpg";
import product4 from "../assets/image-product-4.jpg";
const images = [product1, product2, product3, product4];
import smhero1 from "../assets/image-product-1-thumbnail.jpg";
import smhero2 from "../assets/image-product-2-thumbnail.jpg";
import smhero3 from "../assets/image-product-3-thumbnail.jpg";
import smhero4 from "../assets/image-product-4-thumbnail.jpg";
const smImages = [smhero1, smhero2, smhero3, smhero4];

import Carusel from "./Carusel";
import Product from "./Product";
function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [count, setCount] = useState(0);

  const incrementFunc = () => setCount(count + 1);

  const decrementFunc = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleSubmit = () => {
    const cart = {
      image: smImages[currentImageIndex],
      price: 125.0,
      title: "Kuz Cheklangan Noshirlar Poyafzali",
      count,
    };
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.reload();
  };

  return (
    <div className="flex justify-center gap-32 mt-20 max-w-6xl ml-auto mr-auto">
      <Carusel
        images={images}
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
        smImages={smImages}
      />
      <Product
        className="align-element"
        count={count}
        incrementFunc={incrementFunc}
        decrementFunc={decrementFunc}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default Hero;
