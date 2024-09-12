import Image from "next/image";
import charges from "./icons/charges.svg";
import payment from "./icons/payment.svg";
import delivery from "./icons/delivery.svg";
import print from "./icons/print.svg";
import sizestyle from "./icons/size-style.svg";
import order from "./icons/order.svg";

function Customize() {
  return (
    <section className="customize-section">
      <div className="container ">
        <div className="row">
          <div className="col-md-6">
            <div className="image-container">
              <Image
                src="/images/customize/image.svg" // Replace with your image path
                alt="Customizable Image"
                layout="responsive"
                width={700}
                height={500}
                objectFit="cover"
              />
            </div>
          </div>

          {/* Right Column - Icons */}
          <div className="col-md-6">
            <div className="heading-section">
              <h2 className="main-heading">Why customize</h2>
              <h3 className="subheading">Products with Us?</h3>
            </div>

            {/* Icons Section - 3x3 Grid */}
            <div className="icons-section row">
              <div className="col-md-4 col-6">
                <div className="card">
                  <Image src={charges} alt="No Hidden Charges" />
                  <h6 className="card-heading">
                    No Hidden Charges - Get the Best Deal
                  </h6>
                  <p className="card-paragraph">
                    Forget about extra charges. Our pricing is simple and
                    transparent. With PrintMeUp, you don't need to drive to a
                    printer or pay for an image generator tool. We offer a
                    cost-effective solution for your custom t-shirts.
                  </p>
                </div>
              </div>

              {/* High Quality Printing */}
              <div className="col-md-4 col-6">
                <div className="card">
                  <Image src={print} alt="High Quality Printing" />
                  <h6 className="card-heading">High Quality Printing</h6>
                  <p className="card-paragraph">
                    Experience the durability and longevity of DTF printing on
                    premium t-shirts, ensuring top-notch quality every time
                  </p>
                </div>
              </div>
              {/* Secure Payment */}
              <div className="col-md-4 col-6">
                <div className="card">
                  <Image src={payment} alt="Secure Payment" />
                  <h6 className="card-heading">Secure Payment</h6>
                  <p className="card-paragraph">
                    Shop with confidence at PrintMeUp. Our secure payment
                    options ensure your personal information is protected, and
                    we do not store any of your payment details.
                  </p>
                </div>
              </div>

              {/* Custom Size & Style */}
              <div className="col-md-4 col-6">
                <div className="card">
                  <Image src={sizestyle} alt="Custom Size & Style" />
                  <h6 className="card-heading">Custom Size & Style</h6>
                  <p className="card-paragraph">
                    Find the perfect fit. Choose from a wide range of sizes and
                    styles to create a t-shirt that suits your unique
                    preferences.
                  </p>
                </div>
              </div>

              {/* Fast Delivery */}
              <div className="col-md-4 col-6">
                <div className="card">
                  <Image src={delivery} alt="Fast Delivery" />
                  <h6 className="card-heading">Fast Delivery</h6>
                  <p className="card-paragraph">
                    Enjoy the convenience of fast delivery. Receive your custom
                    t-shirts quickly, right at your doorstep.{" "}
                  </p>
                </div>
              </div>

              {/* Low Minimum Order */}
              <div className="col-md-4 col-6">
                <div className="card">
                  <Image src={order} alt="Low Minimum Order" />
                  <h6 className="card-heading">Low Minimum Order</h6>
                  <p className="card-paragraph">
                    Order with ease at PrintMeUp. Our low minimum order
                    quantities make it simple and affordable to express your
                    unique style and feelings with customized t-shirts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Customize;
