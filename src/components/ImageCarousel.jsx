import React from "react";
import { Carousel } from "flowbite-react";

function ImageCarousel({ images }) {
  return (
    <div className="lg:h-56 sm:h-64 xl:h-80 2xl:h-96 my-5">
      <Carousel
        pauseOnHover={true}
        slideInterval={1500}
        draggable={true}
        indicators={false}
      >
        {images.map((image, index) => (
          <>
            <img key={index} src={image} alt=".../" className="w-full h-96 " />
          </>
        ))}
      </Carousel>
    </div>
  );
}

export default ImageCarousel;
