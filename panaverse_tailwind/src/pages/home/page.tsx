import React from "react";
import Hero from "@/views/heroSection/hero";
import ProgramNutshell from "@/views/programNutshell/ProgramNutshell";
import WhyJoin from "@/views/whyJoin/WhyJoin";
import OurPartner from "@/views/ourPartner/OurPartner";
import StudentFeedback from "@/views/studentFeedback/feedback";
import CitiesEvents from "@/views/citiesEvents/CitiesEvents";
const Home = () => {
  return (
    <>
      <Hero></Hero>
      <ProgramNutshell></ProgramNutshell>
      <WhyJoin></WhyJoin>
      <OurPartner></OurPartner>
      <StudentFeedback></StudentFeedback>
      <CitiesEvents></CitiesEvents>
    </>
  );
};

export default Home;
