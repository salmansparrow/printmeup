import Image from "next/image";
import premimum from "./icons/premimum.svg";
import creative from "./icons/creative.svg";
import shipping from "./icons/shipping.svg";

function Creative() {
  return (
    <>
      <section className="creative-section">
        <div>
          <div className="creative-heading text-center">
            <h2>Unleash Creativity with</h2>
            <h1>AI-Powered T-Shirt Designs</h1>
          </div>
          <div className="creative-para text-center mx-auto">
            <p>
              Create your unique design with our AI-powered tool, select the
              perfect t-shirt color, and position your artwork exactly where you
              want it. Once your order is placed, it’s instantly sent to the
              printer for production, ensuring a seamless process from design to
              delivery of your custom-made t-shirt.
            </p>
          </div>
        </div>

        {/* Creative Cards Section */}
        <div className="creative-cards d-flex justify-content-center flex-wrap">
          {/* Card 1 */}
          <div className="card">
            <div className="card-icon-container">
              <div className="card-icon">
                <div className="icon-bg">
                  <Image
                    src={premimum}
                    alt="icons-creative"
                    className="card-icons"
                  />
                </div>
              </div>
              <div className="card-number">01</div>
            </div>{" "}
            <h5>Premium Quality</h5>
            <h3>Custom T-Shirts</h3>
            <p>
              We use 180-190 GSM t-shirts that have been rigorously tested to
              withstand multiple washes, ensuring durability for everyday use.
              Our shirts are tested with standard washing liquids and various
              drying techniques to guarantee quality.
            </p>
          </div>

          {/* Card 2 */}
          <div className="card">
            <div className="card-icon-container">
              <div className="card-icon">
                <div className="icon-bg">
                  <Image
                    src={premimum}
                    alt="icons-creative"
                    className="card-icons"
                  />
                </div>
              </div>
              <div className="card-number">01</div>
            </div>
            <h5>Easy to</h5>
            <h3>Create, Customize</h3>
            <p>
              After generating an image, click on "Customize Your T-Shirt" to
              select your preferred size, and then re-size and position the
              image. We'll take care of the rest to ensure your design is
              accurately placed and sized. Refer to our t-shirt size chart to
              find the perfect fit for your needs.
            </p>
          </div>

          {/* Card 3 */}
          <div className="card">
            <div className="card-icon-container">
              <div className="icon-bg">
                <div className="card-icon">
                  <Image
                    src={premimum}
                    alt="icons-creative"
                    className="card-icons"
                  />
                </div>
              </div>{" "}
              <div className="card-number">01</div>
            </div>
            <h5>Standard</h5>
            <h3>Shipping</h3>
            <p>
              Our shipping charges are AED 15 for up to 5 t-shirts to a single
              location in the UAE. Additional t-shirts will incur extra shipping
              charges. For orders of 25 or more t-shirts to a single location
              within Dubai, Sharjah, and Ajman, the shipping fee is a fixed AED
              50, for other Emirates, the fixed charge is AED 100.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Creative;
