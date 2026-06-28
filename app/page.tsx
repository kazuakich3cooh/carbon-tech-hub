import Hero from "@/components/home/Hero";
import GlobalNetwork from "@/components/home/GlobalNetwork";
import LatestInsights from "@/components/home/LatestInsights";
import CTA from "@/components/home/CTA";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <Hero />
      <GlobalNetwork />
      <LatestInsights />
      <CTA />
    </main>
  );
}