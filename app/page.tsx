import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <Services />
      <CTA />
    </div>
  );
}
