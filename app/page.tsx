import Header from "./components/header"
import Hero from "./components/hero"
// import ContactCards from "./components/contactCards"
import Cars from "./components/cars"
import About from "./components/about"
import Why from "./components/why"
import Testimonial from "./components/testimonial"
import Footer from "./components/fotter"
import Backtotop from "./components/backtotop"

export default function Home() {
  return (
    <main className="max-w-[1920px] bg-orange-50 mx-auto relative overflow-hidden">
    <Header />
    <Hero />
    {/* <ContactCards /> */}
    <Cars />
    <About />
    <Why />
    <Testimonial />
    <Footer /> 
    <Backtotop />
    <div className=""></div>
    </main>

  )
}
