import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { WhoWeAreSection } from "@/components/sections/who-we-are-section";
import { AboutSection } from "@/components/sections/about-section";
import { ServicesSection } from "@/components/sections/services-section";
import { ClientsSection } from "@/components/sections/clients-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-background relative">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <WhoWeAreSection />
        <AboutSection />
        <ServicesSection />
        <ClientsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
