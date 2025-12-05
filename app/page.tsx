import Hero from "@/components/Hero";
import WhatIDo from "@/components/WhatIDo";
import TechStack from "@/components/TechStack"
import ProjectsSection from "@/components/ProjectsSection";
import Contact from "@/components/Contact";


export default function Home() {
  return (
    <main>
      <Hero />
       <WhatIDo />
        <TechStack />
          <ProjectsSection />
          <Contact/>
    </main>
  );
}
