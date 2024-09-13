import Link from "next/link";
import FooterLogo from "./footerlogo";
import footerpayment from "/public/images/footer-payment-method.svg";
import Image from "next/image";

function Footer() {
  return (
    <div className="bg-black">
      <div className="container">
        <footer className="row mx-auto row-cols-1 row-cols-md-2 row-cols-lg-5 py-5 footer justify-content-evenly">
          <div className="col mb-4 mb-md-0">
            {" "}
            {/* Add bottom margin for spacing */}
            <Link
              href="/"
              className="d-flex align-items-center mb-3 link-dark text-decoration-none"
            >
              <FooterLogo />
            </Link>
            <p className="email">hello@aishirt.co</p>
            <p className="contactno">+02 036 038 3996</p>
            <p className="address">3665 Paseo Place, Suite 0960 San Diego</p>
          </div>

          <div className="col mb-4 mb-md-0">
            {" "}
            {/* Add bottom margin for spacing */}
            <h5>Information</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link href="#" className="nav-link p-0">
                  About us
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="#" className="nav-link p-0">
                  Our Blog
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="#" className="nav-link p-0">
                  Start a Return
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="#" className="nav-link p-0">
                  Contact us
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="#" className="nav-link p-0">
                  Shipping Faq
                </Link>
              </li>
            </ul>
          </div>

          <div className="col mb-4 mb-md-0">
            {" "}
            {/* Add bottom margin for spacing */}
            <h5>Useful links</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link href="#" className="nav-link p-0">
                  My Account
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="#" className="nav-link p-0">
                  Print Provider
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="#" className="nav-link p-0">
                  Become a Partner
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="#" className="nav-link p-0">
                  Custom Products
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="#" className="nav-link p-0">
                  Make your own shirt
                </Link>
              </li>
            </ul>
          </div>

          <div className="col mb-4 mb-md-0">
            {" "}
            {/* Add bottom margin for spacing */}
            <h5 className="newsletter-heading">Newsletter</h5>
            <p className="newsletter-paragraph">
              Get the latest news, events & more delivered to your inbox.
            </p>
            <form className="newsletter-form d-flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="footer-control me-2"
              />
            </form>
          </div>
        </footer>

        {/* Separate the payment section from the grid */}
        <div className="footer-payment text-center mx-auto">
          <Image src={footerpayment} alt="Payment Methods" />
          <p className="copyright">© 2024 AI Shirt. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
