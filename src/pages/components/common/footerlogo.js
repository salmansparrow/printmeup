import Image from "next/image";
import footerlogo from "/public/images/footer_logo.svg";

function FooterLogo() {
  return (
    <>
      <Image src={footerlogo} alt="footer-logo" />
    </>
  );
}

export default FooterLogo;
