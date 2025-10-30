import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import ContactForm from "../components/ContactForm";
import Portfolio from './Portfolio';



const Home = () => {
  return (
    <div className="pt-16">
      <Hero />
      <ServicesSection />
      <Portfolio/>
      <AboutSection />
      <ContactForm />
      
    </div>
  );
};
export default Home;
