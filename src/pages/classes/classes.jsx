import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer";
import ClassesHero from "./classesHero";
import YogaClass from "../home/yogaClass";

const Classes = () => {
  return (
    <>
      <Header />
      <ClassesHero />
      <YogaClass />
      <Footer />
    </>
  );
};

export default Classes;
