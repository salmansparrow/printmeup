import Image from "next/image";
import icons from "./icons/icon.svg";

function HeroSection() {
  return (
    <section className="hero-section text-center py-5">
      <div className="container content">
        <h2 className="hero-heading-1">Unleash the</h2>
        <h2 className="hero-heading-2">Infinite Creativity</h2>
        <h2 className="hero-heading-3">With Our AI-Powered Designs</h2>

        {/* <div className="hero-paragraphs-container mt-4"> */}
        <div className="hero-paragraphs">
          <p className="hero-paragraph">High Quality 4K PX Images</p>
          <p className="hero-paragraph">Customize your t-shirt</p>
          <p className="hero-paragraph">Royalty Free Commercial use</p>
        </div>
        {/* </div> */}

        <div className="hero-form mt-4">
          <div className="input-container">
            <input
              type="text"
              className="form-control"
              placeholder="Type your Prompt..."
            />
            <button className="btn-inside-input">
              Generate
              <Image src={icons} alt="hero-icons" className="ms-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
