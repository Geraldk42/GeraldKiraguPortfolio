import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import FeaturedProjects from "./components/FeaturedProjects";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="pt-24">
      <Hero />
      <TechStack />
      <FeaturedProjects />
      <CTA />
      <Footer />
    </main>
  );
}