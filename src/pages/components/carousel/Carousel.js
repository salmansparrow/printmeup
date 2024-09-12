import React, { useState } from "react";
import Image from "next/image"; // Next.js Image component for optimized images

const imagesData = {
  All: [
    {
      id: 1,
      src: "/images/caro/image.png",
      alt: "Image 1",
    },
    {
      id: 2,
      src: "/images/caro/image-4.png",
      alt: "Image 2",
    },
    {
      id: 3,
      src: "/images/caro/image-1.png",
      alt: "Image 3",
    },
    {
      id: 4,
      src: "/images/caro/image-2.png",
      alt: "Image 4",
    },
    {
      id: 5,
      src: "/images/caro/image-3.png",
      alt: "Image 5",
    },
  ],
  Creative: [],
  Art: [],
  Illustration: [],
  Steampunk: [],
  Gaming: [],
  NFT: [],
  Business: [],

  // Add other categories...
};

function Carousel() {
  const [activeCategory, setActiveCategory] = useState("All");

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <>
      <section className="carousel-section pt-4">
        <div>
          <h3 className="carousel-heading">Our User’s Creation with</h3>
          <h1 className="carousel-heading2">Power AI</h1>
          <div className="carousel-para">
            <p>
              Behold the extraordinary creations from the synergy of our user’s
              ingenuity and the transformative power of AI, a testament to
              boundless innovation.
            </p>
          </div>
        </div>

        {/* Accordion Buttons */}
        <div className="carousel-accordion d-flex">
          {Object.keys(imagesData).map((category) => (
            <button
              key={category}
              className={`category-btn ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Carousel Images */}
        <div className="carousel-images">
          {imagesData[activeCategory].map((image) => (
            <div key={image.id} className="image-container">
              <Image
                src={image.src}
                alt={image.alt} // Ensure alt text is provided
                layout="responsive"
                height={1000}
                width={400}
                objectFit="fit" // Ensures that the image fits within its container without distortion
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Carousel;
