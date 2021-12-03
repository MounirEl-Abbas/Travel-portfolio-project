import React, { useState, useEffect } from "react";

const CitySlider = ({ images }) => {
  const [displayImage, setDisplayImage] = useState("");
  const [currentImage, setCurrentImage] = useState(0);

  const handleChangeImg = (img, n) => {
    setDisplayImage(img);
    setCurrentImage(n);
  };

  useEffect(() => {
    handleChangeImg(images[0], 0);
  }, []);

  return (
    <article className="city-images-container">
      <img src={displayImage} alt="" id="displayImg" />
      <div className="img-indicators-container">
        {images.map((img, nth_Image) => {
          return (
            <img
              src={img}
              alt=""
              className={`${
                nth_Image === currentImage
                  ? "indicator current-image"
                  : "indicator"
              }`}
              onClick={() => handleChangeImg(images[nth_Image], nth_Image)}
            />
          );
        })}
      </div>
    </article>
  );
};

export default CitySlider;
