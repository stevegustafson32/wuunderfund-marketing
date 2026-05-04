import { CloudCog, Sliders, Heart, ClipboardCheck, BarChart3, CreditCard } from "lucide-react";

interface HowItWorksProps {
  persona: "employer" | "employee";
}

export function HowItWorks({ persona }: HowItWorksProps) {
  const isEmployer = persona === "employer";

  const steps = isEmployer
    ? [
        {
          icon: <CloudCog className="w-8 h-8 text-white" />,
          title: "Sync",
          desc: "Connect WuunderFund to your existing payroll system in minutes. No heavy lifting for HR.",
        },
        {
          icon: <Sliders className="w-8 h-8 text-white" />,
          title: "Contribute",
          desc: "Set your contribution methods and eligibility rules to align with your talent and investment goals.",
        },
        {
          icon: <Heart className="w-8 h-8 text-white" />,
          title: "Launch",
          desc: "Employees earn access based on tenure and redeem according to employer spend rules.",
        },
      ]
    : [
        {
          icon: <ClipboardCheck className="w-8 h-8 text-white" />,
          title: "Enroll",
          desc: "Enroll through your employer's WuunderFund program during open enrollment or onboarding.",
        },
        {
          icon: <BarChart3 className="w-8 h-8 text-white" />,
          title: "Review",
          desc: "Check tenure eligibility and available match balance through your employee dashboard.",
        },
        {
          icon: <CreditCard className="w-8 h-8 text-white" />,
          title: "Redeem",
          desc: "Use available funds with approved travel providers when eligibility conditions are met.",
        },
      ];

  return (
    <section className="py-24 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            {isEmployer ? "Embedded Without Disruption" : "How to Use WuunderFund"}
          </h2>
          <p className="text-lg text-muted-foreground">
            {isEmployer
              ? "WuunderFund embeds into existing payroll without migration. No disruption to HR workflows."
              : "A simple, structured process for accessing your employer-funded travel program."}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-100 z-0" />

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-2xl bg-primary shadow-lg shadow-primary/20 flex items-center justify-center mb-8 transform transition-transform hover:-translate-y-2 duration-300">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
