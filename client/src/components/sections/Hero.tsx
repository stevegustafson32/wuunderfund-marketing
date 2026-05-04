import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Calendar, ArrowRight, Info } from "lucide-react";
import employerHeroImage from "@assets/generated_images/diverse_office_team_collaboration.png";
import { DemoModal } from "@/components/modals/DemoModal";

interface HeroProps {
  persona: "employer" | "employee";
}

export function Hero({ persona }: HeroProps) {
  const isEmployer = persona === "employer";

  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-[90vh] flex items-center">
      <div className="container mx-auto px-4">
        {!isEmployer && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8 max-w-4xl mx-auto"
          >
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-blue-800">
                WuunderFund is a payroll-embedded employer-sponsored program. Ask HR about eligibility and tenure rules.
              </p>
            </div>
          </motion.div>
        )}
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10 max-w-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={persona}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  {isEmployer ? "Pilot programs live" : "Product Tour"}
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] mb-6 text-foreground tracking-tight">
                  {isEmployer ? (
                    <>
                      Turn Talent Spend Into <br />
                      <span className="text-primary">Tenure-Verified Outcomes.</span>
                    </>
                  ) : (
                    <>
                      How Your <br />
                      <span className="text-primary">WuunderFund Works.</span>
                    </>
                  )}
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                  {isEmployer
                    ? "Payroll-embedded talent investment infrastructure. Convert signing bonuses and retention incentives into contingent employer matches paid only when employees stay."
                    : "WuunderFund is an employer-sponsored program with eligibility-based access. Your contributions are always yours. Employer match is contingent on tenure eligibility and disburses according to employer spend rules."}
                </p>

                {isEmployer ? (
                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <DemoModal>
                      <Button 
                        size="lg" 
                        className="rounded-full px-6 h-12"
                        data-testid="cta-walkthrough"
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        15-Minute Talent Investment Walkthrough
                      </Button>
                    </DemoModal>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="rounded-full px-6 h-12"
                      data-testid="cta-contact-sales"
                      asChild
                    >
                      <a href="mailto:sales@wuunderfund.com?subject=WuunderFund Sales Inquiry">
                        Contact Sales
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-6 mb-8">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white border border-gray-200 rounded-xl p-5">
                        <h3 className="font-bold text-sm mb-2 text-primary">Your Contributions</h3>
                        <p className="text-sm text-muted-foreground">Always yours. Accessible anytime.</p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-xl p-5">
                        <h3 className="font-bold text-sm mb-2 text-accent">Employer Match</h3>
                        <p className="text-sm text-muted-foreground">Contingent on tenure. Disburses when eligibility is met.</p>
                      </div>
                    </div>
                    <a 
                      href="#how-it-works" 
                      className="text-primary hover:underline text-sm font-medium inline-flex items-center gap-1"
                      data-testid="link-learn-more"
                    >
                      Learn how WuunderFund works at your company
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                )}

                {isEmployer && (
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span>Payroll-Embedded</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span>Talent Investment Infrastructure</span>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative lg:h-[700px] w-full">
            <AnimatePresence mode="wait">
              <motion.div
                 key={persona}
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0, scale: 1.05 }}
                 transition={{ duration: 0.7, ease: "easeOut" }}
                 className="relative h-full w-full"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-[2rem] transform rotate-3 scale-95 opacity-50 blur-2xl" />
                <img
                  src={employerHeroImage}
                  alt="Professional dashboard interface"
                  className="relative w-full h-full object-cover rounded-[2rem] shadow-2xl border-4 border-white/50"
                  style={{ maxHeight: "700px" }}
                  data-testid={`hero-image-${persona}`}
                />
                
                {isEmployer && (
                   <motion.div 
                     initial={{ y: 20, opacity: 0 }}
                     animate={{ y: 0, opacity: 1 }}
                     transition={{ delay: 0.4 }}
                     className="absolute -left-8 bottom-12 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50 max-w-[280px]"
                   >
                     <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Retention Rate</div>
                     <div className="text-4xl font-bold text-green-600 mb-1">95%</div>
                     <div className="text-xs text-muted-foreground">*Observed in 2025 Pilot Program</div>
                   </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
