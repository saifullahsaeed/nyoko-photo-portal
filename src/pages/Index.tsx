
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PhotoGallery from '../components/PhotoGallery';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <PhotoGallery />
      <HowItWorks />
      <Features />
      <Footer />
    </div>
  );
};

export default Index;
