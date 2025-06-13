import Footer from "../../components/footer";
import Header from "../../components/header/header";
import YogaContent from "../home/yogaContent";
import YogaTrainer from "../home/yogaTrainer";
import TrainerHero from "./trainerHero";

const Trainer = () => {
  return (
    <>
      <Header />
      <TrainerHero />
      <YogaTrainer />
      <YogaContent />
      <Footer />
    </>
  );
};

export default Trainer;
