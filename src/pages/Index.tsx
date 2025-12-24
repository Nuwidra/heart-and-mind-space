import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import TopicsSection from "@/components/TopicsSection";
import FreeSampleSection from "@/components/FreeSampleSection";
import SelfHelpSection from "@/components/SelfHelpSection";
import PricingSection from "@/components/PricingSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Psicóloga Ingrid Rojas | Bienestar Emocional y Crecimiento Personal</title>
        <meta 
          name="description" 
          content="Acompañamiento profesional para tu bienestar emocional. Recursos sobre estrés, ansiedad, autoestima, relaciones y crecimiento personal con la Psicóloga Ingrid Rojas." 
        />
        <meta name="keywords" content="psicóloga, bienestar emocional, ansiedad, estrés, autoestima, terapia, Costa Rica" />
      </Helmet>

      <main className="min-h-screen">
        <Navbar />
        <HeroSection />
        <DisclaimerBanner />
        <TopicsSection />
        <FreeSampleSection />
        <SelfHelpSection />
        <PricingSection />
        <AboutSection />
        <FAQSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
