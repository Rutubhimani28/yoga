import Footer from "../../components/footer";
import Header from "../../components/header/header";
import RecentPost from "../home/recentPost";
import BlogHero from "./blogHero";

const Blog = () => {
  return (
    <>
      <Header />
      <BlogHero />
      <RecentPost />
      <Footer />
    </>
  );
};

export default Blog;