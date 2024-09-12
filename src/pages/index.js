import AiSection from "./components/aisection/AiSection";
import Carousel from "./components/carousel/Carousel";
import Customize from "./components/customize/Customise";
import Layout from "./components/layout/Layout";
import Price from "./components/price/Price";
import Testimonials from "./components/testimonials/Testimonials";

function HomePage() {
  return (
    <>
      <Layout>
        <AiSection />
        {/* <Customize /> */}
        <Price />
        <Carousel />
        <Testimonials />
      </Layout>
    </>
  );
}

export default HomePage;
