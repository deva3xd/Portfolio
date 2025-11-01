import "./App.css";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Certificate from "./components/Certificate";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
    return (
        <div className="bg-default">
            <Navbar />
            <Header />
            <Projects />
            <Skills />
            <Certificate />
            <Contact />
            <Footer />
        </div>
    );
}
