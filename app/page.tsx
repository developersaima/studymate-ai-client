import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import AITools from "@/components/home/AITools";
import Statistics from "@/components/home/Statistics";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <AITools />
      <Statistics />
      <Testimonials />
      <FAQ />
      <Newsletter />
    </main>
  );
}