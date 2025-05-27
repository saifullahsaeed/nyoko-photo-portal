
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PhotoShowcase from '../components/PhotoShowcase';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <PhotoShowcase />
      <HowItWorks />
      <Features />
      <Footer />
    </div>
  );
};

export default Index;
