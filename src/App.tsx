import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import CardsSection from "./components/CardsSection";
import ExperienceSection from "./components/ExperienceSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import AppointmentForm from "./components/AppointmentForm";
import './App.css';

// Main page component that combines all sections
function HomePage() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return (
        <div className="overflow-x-hidden">
            <Hero />
            <AboutUs id="about-us" />
            <CardsSection />
            <ExperienceSection />
            <ServicesSection id="services" />
            <ContactSection id="contact" />
        </div>
    );
}

// Appointment page component
function AppointmentPage() {
    return (
        <div className="overflow-x-hidden">
            <AppointmentForm />
        </div>
    );
}

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/rendez-vous" element={<AppointmentPage />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;