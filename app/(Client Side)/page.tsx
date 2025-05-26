import AboutCard from "@/components/home/AboutCard";
import HeroSlider from "@/components/sliders/HeroSlider";
import ServiceCard from "@/components/home/ServiceCard";
import Structure from "@/components/home/Structure";
import ProjectCard from "@/components/home/ProjectCard";
import TestimonalCard from "@/components/home/TestimonalCard";
import BlogCard from "@/components/home/BlogCard";

export default async function Home() {
  
  return (
    <div className="max-w-[1440px]">
      <HeroSlider/>
      <AboutCard/>
      <ServiceCard/>
      <Structure />
      <ProjectCard />
      <TestimonalCard />
      <BlogCard />
    </div>
  );
}
