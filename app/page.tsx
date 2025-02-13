import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Experience from "@/components/Experience"
// import VolunteerExperience from "@/components/VolunteerExperience"
import Contact from "@/components/Contact"
import type { WithContext, ProfilePage } from 'schema-dts';
import { cstayyab } from "@/schemas/cstayyab"



const profilePage: WithContext<ProfilePage> = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: cstayyab,
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePage) }}
      />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      {/* <VolunteerExperience /> */}
      <Contact />
    </>
  )
}
