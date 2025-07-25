import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Particle from "./components/Particle";
import Button from "./components/Button";

export default function App() {
    return (
        <div className="bg-custom-primary">
            <Particle id="particles" />
            <div className="max-w-screen-2xl mx-auto">
                <Navbar />
                <Hero />
                <About />
                <Project />
                <Contact />
                <Footer />
                <Button />
            </div>
        </div>
    );
}
