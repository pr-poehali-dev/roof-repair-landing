import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import AboutSection from "@/components/AboutSection";
import PricingSection from "@/components/PricingSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactsSection from "@/components/ContactsSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Спасибо! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <HeroSection />
      <AdvantagesSection />
      <AboutSection />
      <PricingSection />
      <ServicesSection />
      <GallerySection />
      <ReviewsSection />
      <ContactsSection formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />
      <Footer />
    </div>
  );
};

export default Index;
