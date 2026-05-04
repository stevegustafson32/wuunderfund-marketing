import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { SocialProof } from "@/components/sections/SocialProof";
import { ValueProps } from "@/components/sections/ValueProps";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FrictionKiller } from "@/components/sections/FrictionKiller";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { Footer } from "@/components/sections/Footer";
import { EmployeeFooter } from "@/components/sections/EmployeeFooter";

export type Persona = "employer" | "partner" | "employee";

export default function Home() {
  const [persona, setPersona] = useState<Persona>("employer");

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      <Navbar persona={persona} setPersona={setPersona} />
      
      <main>
        {persona === "partner" ? (
          <PartnersSection />
        ) : (
          <>
            <Hero persona={persona} />
            {persona === "employer" && <FrictionKiller />}
            <ValueProps persona={persona} />
            <HowItWorks persona={persona} />
          </>
        )}
      </main>

      {persona === "employee" ? <EmployeeFooter /> : <Footer />}
    </div>
  );
}
