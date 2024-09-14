import Image from "next/image";

function AiSection() {
  return (
    <section className="aisection">
      <div className="container">
        <div className="row py-5 mx-5">
          {/* Left Column - Cards */}
          <div className="col-md-6">
            <div className="cards-container">
              <div className="section-heading">
                <h2>How to Make</h2>
                <h1>AI Generated Design</h1>
              </div>
              <div className="ai-card">
                <div className="ai-card-number">01</div>
                <div className="ai-card-text">
                  <h4 className="ai-card-heading">Write a Prompt</h4>
                  <p className="ai-card-paragraph">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                </div>
              </div>

              <div className="ai-card">
                <div className="ai-card-number">02</div>
                <div className="ai-card-text">
                  <h4 className="ai-card-heading">Select Your Best Design</h4>
                  <p className="ai-card-paragraph">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                </div>
              </div>
              <div className="ai-card">
                <div className="ai-card-number">03</div>
                <div className="ai-card-text">
                  <h4 className="ai-card-heading">Customize & Checkout</h4>
                  <p className="ai-card-paragraph">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="col-md-6">
            <div className="ai-image-container">
              <Image
                src="/images/aisection/image 2.png" // Corrected path
                alt="ai-Image"
                layout="responsive"
                width={700}
                height={500}
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AiSection;
