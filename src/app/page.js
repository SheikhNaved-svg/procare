"use client"

import Aresolution from "./components/homepage/Aresolution";
import CareerSection from "./components/homepage/Careers";
import Hero from "./components/homepage/Hero";
import ProviderHelp from "./components/homepage/rought";
import UpcomingEvents from "./components/homepage/Upcomingevent";
import Whyus from "./components/homepage/Whyus";

export default function Home() {
  return (
    <>
    <Hero/>
    <Whyus />
    <Aresolution/>
    <UpcomingEvents/>
    <CareerSection/>
    
    </>
  );
}
