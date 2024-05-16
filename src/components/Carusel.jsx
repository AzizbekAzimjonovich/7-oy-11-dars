import React from "react";

import previousIcon from "../assets/icon-previous.svg";
import nextIcon from "../assets/icon-next.svg";

function Carusel({
  images,
  currentImageIndex,
  setCurrentImageIndex,
  smImages,
}) {
  const handleNextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="flex flex-col justify-center gap-32 ">
      <div className="w-full w-96 h-96">
        <button
          onClick={() => document.getElementById("image_modal").showModal()}
        >
          <img
            className="rounded-lg mb-3 w-96"
            src={images[currentImageIndex]}
            alt="Mahsulot"
          />
        </button>
        <dialog
          id="image_modal"
          className="modal bg-black bg-opacity-60 flex items-center justify-center"
        >
          <div className="modal-box border-none overflow-hidden bg-transparent rounded-lg lg:grid">
            <div>
              <img
                src={images[currentImageIndex]}
                alt="Mahsulot"
                className="rounded-lg w-full "
              />
              <button
                className="relative rounded-full w-12 h-12 btn bottom-64 right-5"
                onClick={handlePreviousImage}
              >
                <img src={previousIcon} alt="Oldingi" />
              </button>
              <button
                className="relative rounded-full w-12 h-12 btn left-96 bottom-64"
                onClick={handleNextImage}
              >
                <img src={nextIcon} alt="Keyingi" />
              </button>
            </div>
            <div className="mt-[-15px] lg:grid grid-cols-4 gap-8 md:hidden sm:hidden">
              {smImages &&
                smImages.map((smImage, index) => (
                  <img
                    className="rounded-lg cursor-pointer hover:opacity-50"
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    src={smImage}
                    alt={`Sm Thumbnail ${index + 1}`}
                  />
                ))}
            </div>
          </div>
        </dialog>
        <div className="lg:grid grid-cols-4 gap-5 ">
          {smImages &&
            smImages.map((smImage, index) => (
              <img
                className="rounded-lg cursor-pointer w-20 hover:opacity-50"
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                src={smImage}
                alt={`Sm Thumbnail ${index + 1}`}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Carusel;
