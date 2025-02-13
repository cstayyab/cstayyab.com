import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Experience from "@/components/Experience"
// import VolunteerExperience from "@/components/VolunteerExperience"
import Contact from "@/components/Contact"
import type {WithContext, ProfilePage } from 'schema-dts';
import { cstayyab } from "@/schemas/cstayyab"



const profilePage: WithContext<ProfilePage> = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: cstayyab,
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePage) }}
      />
      <Header />
      <main className="container mx-auto px-4 pt-20">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        {/* <VolunteerExperience /> */}
        <Contact />
      </main>
      <footer className="container mx-auto px-4 py-8 mt-16 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Muhammad Tayyab Sheikh (CSTayyab). All rights reserved.
      </footer>
    </div>
  )
}
