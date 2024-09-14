import AiSection from "./components/aisection/AiSection";
import Carousel from "./components/carousel/Carousel";
import Creative from "./components/creative/Creative";
import Customize from "./components/customize/Customise";
import HeroSection from "./components/hero/Hero";
import Layout from "./components/layout/Layout";
import Price from "./components/price/Price";
import Testimonials from "./components/testimonials/Testimonials";

function HomePage() {
  return (
    <>
      <Layout>
        <HeroSection />
        <Creative />
        <AiSection />
        <Customize />
        <Price />
        <Carousel />
        <Testimonials />
      </Layout>
    </>
  );
}

export default HomePage;
