import { HeroSection } from "@/components/hero-section";
import { Experience } from "@/components/experience";
import { Tools } from "@/components/tools";
import { Project } from "@/components/project";
import {Contact} from '@/components/contact';
export default function Home() {
  return (
    <div className="p-4 px-6 md:px-8">
      <HeroSection/>
      <Experience/>
      <Tools/>
      <Project/>
      <Contact/>
      <p className="p-6 flex items-center justify-center w-full text-xs md:text-sm text-neutral-400">&copy; 2024 Sajib Chandra Saha</p>

    </div>

  );
}
