
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import PackagesSection from '@/components/PackagesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingIcons from '@/components/FloatingIcons';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <PackagesSection />
      <ContactSection />
      <Footer />
      <FloatingIcons />
    </div>
  );
};

export default Index;
