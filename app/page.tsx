import { Hero } from "@/components/sections/hero";
import { StoryScroll } from "@/components/sections/story-scroll";
import { FeaturedCabanas } from "@/components/sections/featured-cabanas";
import { ExperienceHighlights } from "@/components/sections/experience-highlights";
import { Testimonials } from "@/components/sections/testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StoryScroll />
      <FeaturedCabanas />
      <ExperienceHighlights />
      <Testimonials />
    </>
  );
}


