import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Tours } from "./components/Tours";
import { Experience } from "./components/Experience";
import { Reviews } from "./components/Reviews";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { useLenis } from "./hooks/useLenis";

export default function App() {
  // Inicializa o hook de scroll suave
  useLenis();

  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      <Navigation />
      <Hero />
      <Tours />
      <Experience />
      <Reviews />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
