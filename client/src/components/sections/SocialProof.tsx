import { motion } from "framer-motion";

export function SocialProof() {
  const companies = [
    "TechCorp Global", "Innovate Inc", "FutureSystems", "CloudScale", "DataFlow", "NextLevel", "AlphaGroup"
  ];

  return (
    <section className="py-10 border-y border-border/50 bg-white/50 backdrop-blur-sm overflow-hidden">
      <div className="container mx-auto px-4 mb-6 text-center">
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
          Trusted by forward-thinking teams
        </p>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 px-8">
          {companies.map((company, i) => (
            <span key={i} className="text-xl md:text-2xl font-heading font-bold text-gray-300 hover:text-gray-400 transition-colors cursor-default">
              {company}
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {companies.map((company, i) => (
            <span key={`dup-${i}`} className="text-xl md:text-2xl font-heading font-bold text-gray-300 hover:text-gray-400 transition-colors cursor-default">
              {company}
            </span>
          ))}
           {/* Duplicate again for wide screens */}
           {companies.map((company, i) => (
            <span key={`dup2-${i}`} className="text-xl md:text-2xl font-heading font-bold text-gray-300 hover:text-gray-400 transition-colors cursor-default">
              {company}
            </span>
          ))}
        </div>
        
        <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
