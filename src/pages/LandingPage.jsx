import React from "react"
import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import Business from "./components/Business.jsx"
import About from "./components/About.jsx"
import Footer from "./components/Footer.jsx"

const LandingPage = () => {
  return (
    <div className=" bg-[#00040f]">
      <Navbar />
      <Hero />
      <Business />
      <About />
      <Footer />
    </div>
  )
}

export default LandingPage
