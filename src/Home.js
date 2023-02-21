import FeatureProduct from "./components/FeatureProduct";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";

const Home = () => {
  const data = {
    name: "Saniya store",
  };

  return (
    <>
      <HeroSection myName="Sanu Store"  />
      <FeatureProduct/>
      <Services />
      <Trusted />
    </>
  );
};

export default Home;