import Slider from "../../components/header/slider";
import Header from "../../components/header/header";
import YogaWhatSays from "./yogaWhatSays";
import CalenderYoga from "./calender";
import YogaClass from "./yogaClass";
import YogaDetails from "./yogaDetails";
import YogaContent from "./yogaContent";
import YogaSection from "./yogaSection";
import YogaCards from "./yogaCards";
import YogaTrainer from "./yogaTrainer";
import Footer from "../../components/footer";
import RecentPost from "./recentPost";

const Home = () => {
  return (
    <>
      <Header />
      <Slider />
      <YogaCards />
      <YogaSection />
      <YogaContent />
      <YogaClass />
      <YogaDetails />
      <YogaWhatSays />
      <CalenderYoga />
      <YogaTrainer />
      <RecentPost />
      <Footer />
    </>
  );
};
export default Home;
