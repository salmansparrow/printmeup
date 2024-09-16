// import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Iconshero from "./icons/icon";

function HeroSection() {
  // const sliderRef = useRef(null); // Create a ref for the slider
  // const [slideIndex, setSlideIndex] = useState(0);
  // const [slideWidth, setSlideWidth] = useState(0);

  // useEffect(() => {
  //   // Only run on the client
  //   const slider = sliderRef.current;

  //   // Set the slide width after the component mounts
  //   if (slider) {
  //     const updateSlideWidth = () => {
  //       const slideElement = slider.querySelector(".slide");
  //       if (slideElement) {
  //         setSlideWidth(slideElement.offsetWidth);
  //       }
  //     };

  //     updateSlideWidth();
  //     window.addEventListener("resize", updateSlideWidth); // Update slide width on resize
  //     return () => window.removeEventListener("resize", updateSlideWidth);
  //   }
  // }, []);

  // const nextSlide = () => {
  //   if (sliderRef.current) {
  //     const totalSlides = sliderRef.current.children.length;
  //     setSlideIndex((prev) => Math.min(prev + 1, totalSlides - 1));
  //   }
  // };

  // const prevSlide = () => {
  //   setSlideIndex((prev) => Math.max(prev - 1, 0));
  // };
  return (
    <section className="hero-section text-center py-5">
      <div className="container content">
        <h2 className="hero-heading-1">Unleash the</h2>
        <h2 className="hero-heading-2">Infinite Creativity</h2>
        <h2 className="hero-heading-3">With Our AI-Powered Designs</h2>

        {/* <div className="hero-paragraphs-container mt-4"> */}

        <div className="hero-paragraphs-container">
          <div className="hero-paragraphs">
            <p className="hero-paragraph">High Quality 4K PX Images</p>
            <p className="hero-paragraph">Customize your t-shirt</p>
            <p className="hero-paragraph">Royalty Free Commercial use</p>
          </div>
          {/* </div> */}
        </div>

        <div className="hero-form mt-4">
          <div className="input-container">
            <input
              type="text"
              className="form-control"
              placeholder="Type your Prompt..."
            />
            <button className="btn-inside-input">
              Generate
              <Image src={Iconshero} alt="hero-icons" className="ms-2" />
            </button>
          </div>
        </div>
      </div>

      <div></div>

      <div></div>
      {/* Hero slider section */}
      <section className="hero-name-section ">
        <div className="hero-name-images-container d-flex">
          <div>
            <Image
              src="/images/carousal/image 1.png"
              height={290}
              width={290}
              alt="image-1"
              layout="responsive"
              // objectFit="cover"
            />
          </div>

          <div>
            <Image
              src="/images/carousal/image.png"
              height={290}
              width={290}
              alt="image-2"
              layout="responsive"
              objectFit="cover"
            />
          </div>

          <div>
            <Image
              src="/images/carousal/image 2.png"
              height={290}
              width={290}
              alt="image-3"
              layout="responsive"
              objectFit="cover"
            />
          </div>

          <div>
            <Image
              src="/images/carousal/image-2.png"
              height={290}
              width={290}
              alt="image-4"
              layout="responsive"
              objectFit="cover"
            />
          </div>

          <div>
            <Image
              src="/images/carousal/image 3.png"
              height={290}
              width={290}
              alt="image-5"
              layout="responsive"
              objectFit="cover"
            />
          </div>

          <div>
            <Image
              src="/images/carousal/image--3.png"
              height={290}
              width={290}
              alt="image-6"
              layout="responsive"
              objectFit="cover"
            />
          </div>

          <div>
            <Image
              src="/images/carousal/image 4.png"
              height={290}
              width={290}
              alt="image-7"
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </div>
      </section>
    </section>
  );
}

export default HeroSection;
