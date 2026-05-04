import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Building2, Briefcase, Users, UserCog, Plane, Shield, DollarSign, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type PartnerType = "broker" | "peo" | "consultant" | "payroll" | "travel";

const partnerTypes: {
  id: PartnerType;
  icon: React.ReactNode;
  title: string;
  headline: string;
  whyItWorks: string;
  safety: string;
  monetization: string;
  guardrails?: string[];
  cta?: string;
}[] = [
  {
    id: "broker",
    icon: <Briefcase className="w-6 h-6" />,
    title: "Benefits Brokers",
    headline: "A renewal-safe incentive infrastructure.",
    whyItWorks: "Offsets rate shock with contingent, tenure-aligned employer matches.",
    safety: "Post-tax, no payroll migration, no ERISA exposure.",
    monetization: "Recurring per-employee revenue (Annuity style).",
  },
  {
    id: "peo",
    icon: <Users className="w-6 h-6" />,
    title: "PEOs",
    headline: "Portfolio tenure-aligned ROI structure.",
    whyItWorks: "Increases switching friction by embedding incentive infrastructure into payroll.",
    safety: "No impact on co-employment or payroll structure.",
    monetization: "Margin expansion tied to total enrolled headcount.",
  },
  {
    id: "consultant",
    icon: <UserCog className="w-6 h-6" />,
    title: "HR Consultants",
    headline: "Turn incentive strategy into a working system.",
    whyItWorks: "Contingent matches driven by tenure milestones.",
    safety: "No admin burden for you.",
    monetization: "Recurring revenue aligned with client outcomes.",
  },
  {
    id: "payroll",
    icon: <Building2 className="w-6 h-6" />,
    title: "Payroll Providers",
    headline: "Add payroll-embedded incentive infrastructure.",
    whyItWorks: "Tenure milestones + matching disbursed through payroll; improves client stickiness.",
    safety: "No migration required. Integrates with existing deduction workflows.",
    monetization: "Per-employee revenue share on enrolled headcount.",
  },
  {
    id: "travel",
    icon: <Plane className="w-6 h-6" />,
    title: "Travel Partners",
    headline: "Access captive, employer-funded travel demand.",
    whyItWorks: "Employer match is pre-allocated and must be redeemed in approved travel channels. High-intent demand.",
    safety: "We handle compliance and fund management.",
    monetization: "Direct bookings from funds that must be spent on travel.",
    guardrails: ["Not an OTA.", "No Consumer Arbitrage.", "No Brand Dilution."],
    cta: "Explore Travel Partner Opportunities",
  },
];

export function PartnersSection() {
  const [activePartner, setActivePartner] = useState<PartnerType>("broker");
  const activeData = partnerTypes.find((p) => p.id === activePartner)!;

  return (
    <section className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Channel Partner Portal
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
            Built to be distributed through{" "}
            <span className="text-primary">partners.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Payroll-embedded incentive infrastructure that converts upfront talent spend into tenure-aligned, contingent matches. WuunderFund is built to be distributed through partners and create unique value for each channel.
          </p>
          <p className="text-sm text-primary font-medium">
            Ledger-driven, employer-funded talent investment infrastructure.
          </p>
        </div>

        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
            {partnerTypes.map((partner) => (
              <button
                key={partner.id}
                onClick={() => setActivePartner(partner.id)}
                data-testid={`partner-tab-${partner.id}`}
                className={cn(
                  "flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all duration-300",
                  activePartner === partner.id
                    ? "border-primary bg-primary/5 text-primary"
                    : "border-gray-200 bg-white hover:border-gray-300 text-muted-foreground hover:text-foreground"
                )}
              >
                {partner.icon}
                <span className="font-medium text-xs text-center">{partner.title}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activePartner}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-3xl mx-auto bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  {activeData.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{activeData.title}</h3>
                  <p className="text-lg text-primary font-medium">{activeData.headline}</p>
                </div>
              </div>

              {activeData.guardrails && (
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Shield className="w-5 h-5 text-slate-600" />
                    <span className="font-semibold text-sm text-slate-700">Guardrails</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeData.guardrails.map((g, i) => (
                      <span key={i} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-sm text-slate-600">
                        {g}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-green-600 font-bold text-xs">WHY</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-green-700 mb-1">Why it works</p>
                    <p className="text-muted-foreground">{activeData.whyItWorks}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Shield className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-blue-700 mb-1">Safety</p>
                    <p className="text-muted-foreground">{activeData.safety}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <DollarSign className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-purple-700 mb-1">Monetization</p>
                    <p className="text-muted-foreground">{activeData.monetization}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="text-center flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="rounded-full px-8" data-testid="partner-cta" asChild>
            <a href="mailto:partners@wuunderfund.com?subject=Partner Program Inquiry">
              {activeData.cta || "Explore Partner Program"}
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8" data-testid="partner-cta-secondary" asChild>
            <a href="mailto:partners@wuunderfund.com?subject=Talent Investment Partner Walkthrough">
              See Partner Economics & Integration
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
