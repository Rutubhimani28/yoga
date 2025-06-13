import Footer from "../../components/footer";
import Header from "../../components/header/header";
import YogaContent from "../home/yogaContent";
import YogaDetails from "../home/yogaDetails";
import YogaSection from "../home/yogaSection";
import YogaWhatSays from "../home/yogaWhatSays";
import AboutHero from "./aboutHero";

const AboutUs = () => {
  return (
    <>
      <Header />
      <AboutHero />
      <YogaSection />
      <YogaContent />
      <YogaDetails />
      <YogaWhatSays />
      <Footer />
    </>
  );
};

export default AboutUs;
