import React from "react";
import ExploreCategories from "../components/home/ExploreCategories";
import Hero from "../components/home/Hero";
import PopularServices from "../components/home/PopularServices";
import WhyChooseUs from "../components/home/WhyChooseUs";

const HomePage: React.FC = () => {
  return (
    <div className="space-y-16">
      <Hero />
      <PopularServices />
      <WhyChooseUs />
      <ExploreCategories />
    </div>
  );
};

export default HomePage;
