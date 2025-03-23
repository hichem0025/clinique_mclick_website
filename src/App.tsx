import './App.css';
import Navbar from "./components/NavBar.tsx";
import Hero from "./components/Hero.tsx";
import AboutUs from "./components/AboutUs.tsx";
import CardsSection from "./components/CardsSection.tsx";
import ExperienceSection from "./components/ExperienceSection.tsx";
import ServicesSection from "./components/ServicesSection.tsx";
import ContactSection from "./components/ContactSection.tsx";
import Footer from "./components/Footer.tsx";

function App() {
    return (
        <div className="overflow-x-hidden">
            <Navbar />
            <Hero />
            <AboutUs />
            <CardsSection />
            <ExperienceSection />
            <ServicesSection />
            <ContactSection />
            <Footer />
        </div>
    );
}

export default App;