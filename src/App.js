import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Project from "./components/Project";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
    return (
        <div className="bg-default">
            <div className="max-w-screen-lg mx-auto">
                <Navbar />
                <Header />
                <Project />
                <About />
                <Contact />
                <Footer />
            </div>
        </div>
    );
}
