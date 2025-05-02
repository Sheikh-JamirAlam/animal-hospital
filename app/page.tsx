import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Team from "@/components/home/Team";
import Testimonials from "@/components/home/Testamonials";
import Contact from "@/components/home/Contact";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Team />
        <Testimonials />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
