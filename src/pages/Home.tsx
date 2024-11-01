// import React from 'react'

import HeroSection from "../components/HeroSection/HeroSection";
import Ranking from "../components/Ranking/Ranking";

export default function Home() {
  return (
    <section>
      <HeroSection />
      <div className="w-full h-auto bg-black">
        <Ranking/>
      </div>
    </section>
  )
}
