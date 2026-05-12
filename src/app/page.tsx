import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Program } from "@/components/sections/Program";
import { VideoPreview } from "@/components/sections/VideoPreview";
import { Author } from "@/components/sections/Author";
import { Pricing } from "@/components/sections/Pricing";
import { Reviews } from "@/components/sections/Reviews";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Program />
        <VideoPreview />
        <Author />
        <Pricing />
        <Reviews />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
