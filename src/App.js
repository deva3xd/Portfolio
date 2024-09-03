import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Particle from "./components/Particle";
import Arrow from "./assets/icons/up-arrow.png";

export default function App() {
    return (
        <div className="bg-custom-primary">
            <Particle id="particles" />
            <div className="container mx-auto">
                <Navbar />
                <Hero />
                <About />
                <Project />
                <Contact />
                <Footer />
                <a href="#hero" className="fixed bottom-0 right-0 m-5 bg-black p-5 rounded-full hover:bg-gray-500"><img src={Arrow} alt="Arrow" /></a>
            </div>
        </div>
    );
}
