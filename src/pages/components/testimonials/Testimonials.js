import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const testimonialsData = [
  {
    id: 1,
    message:
      "Using the AI generator was a game-changer for me! In just a few clicks, I created a custom t-shirt design that perfectly matched my vision. The process was seamless, intuitive, and fun. The quality of the final product exceeded my expectations—I'll definitely be using this tool again!",
    stars: 5,
    image: "/images/image.png",
  },
  {
    id: 2,
    message:
      "I was amazed by how easy it was to create a personalized t-shirt design with the AI generator. The variety of options and the user-friendly interface made it such a smooth experience. My shirt arrived quickly, and the print quality was fantastic. Highly recommend!",
    stars: 5,
    image: "/images/image.png",
  },
  {
    id: 3,
    message:
      "This tool is a must for anyone looking to make custom designs. I was able to create a unique t-shirt for my friend's birthday, and it turned out amazing. The AI really understands design preferences, and the quality of the product was top-notch. Will definitely be back for more.",
    stars: 4,
    image: "/images/image.png",
  },
  {
    id: 4,
    message:
      "I’ve tried other custom design platforms before, but this one is by far the best. The AI suggestions were on point, and the final product looked even better than I imagined. The quality of the fabric and print is excellent. I’m super impressed!",
    stars: 5,
    image: "/images/image.png",
  },
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  const { message, stars, image } = testimonialsData[currentIndex];

  return (
    <section className="testimonials-container">
      <div className="row align-items-center">
        {/* Left Section with Text */}
        <div className="col-md-6 text-section">
          <h2 className="heading">Our User’s Speeches</h2>
          <h4 className="subheading">About Power AI</h4>
          <div className="message-div">
            <p className="message">{message}</p>
          </div>
          {/* Star Rating */}
          <div className="stars">
            {Array(stars)
              .fill()
              .map((_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} color="#f0b419" />
              ))}
          </div>
          {/* Dot Navigation */}
          <div className="dots-navigation">
            {testimonialsData.map((_, index) => (
              <span
                key={index}
                className={`dot ${currentIndex === index ? "active" : ""}`}
                onClick={() => goToTestimonial(index)}
              />
            ))}
          </div>
        </div>

        {/* Right Section with Image */}
        <div className="col-md-6 image-section">
          <Image src={image} alt="testimonial" width={400} height={400} />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
