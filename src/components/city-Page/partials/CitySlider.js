import React from "react";

const CitySlider = ({ images }) => {
  return (
    <article>
      {images.map((img) => (
        <img src={img} alt="" />
      ))}
    </article>
  );
};

export default CitySlider;
