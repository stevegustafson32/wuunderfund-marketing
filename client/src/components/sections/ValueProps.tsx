import { motion } from "framer-motion";
import { TrendingDown, Handshake, Globe, Plane, Coins, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

interface ValuePropsProps {
  persona: "employer" | "employee";
}

export function ValueProps({ persona }: ValuePropsProps) {
  const isEmployer = persona === "employer";

  const cards = isEmployer
    ? [
        {
          id: "e1",
          colSpan: "col-span-12 lg:col-span-6",
          title: "The Price of Unsecured Incentives",
          desc: "The average company loses $3.75M+ annually on upfront signing bonuses and retention incentives wasted on early exits. Contingent matches eliminate that waste.",
          qualifier: "Based on 1,000 employee org @ $75k avg salary",
          visual: (
            <div className="h-full flex items-center justify-center p-8">
              <div className="relative w-full h-32 bg-red-50 rounded-xl flex items-end px-4 pb-4 gap-2">
                {[80, 75, 60, 55, 40, 30].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex-1 bg-red-400 rounded-t-sm opacity-80"
                  />
                ))}
                <div className="absolute top-4 right-4 text-red-600 font-bold flex items-center gap-1">
                  <TrendingDown className="w-5 h-5" />
                  -$3.75M
                </div>
              </div>
            </div>
          ),
        },
        {
          id: "e2",
          colSpan: "col-span-12 lg:col-span-6",
          title: "Tenure-Verified Impact",
          desc: "Our pilot programs reduced turnover from 13% to just 5%, converting wasted upfront incentive capital into tenure-verified outcomes.",
          qualifier: "Observed in Q4 2025 Pilot Program",
          visual: (
            <div className="h-full flex items-center justify-center p-8">
               <div className="relative w-40 h-40">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="80" cy="80" r="70" stroke="#eee" strokeWidth="12" fill="none" />
                    <motion.circle
                      cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="12" fill="none"
                      className="text-green-500"
                      strokeDasharray="440"
                      strokeDashoffset="440"
                      animate={{ strokeDashoffset: 440 - (440 * 0.95) }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold text-green-600">5%</span>
                    <span className="text-xs text-muted-foreground">Turnover</span>
                  </div>
               </div>
            </div>
          ),
        },
        {
          id: "e3",
          colSpan: "col-span-12",
          title: "Eligibility Rules Engine",
          desc: "Employer match remains employer-controlled until tenure milestones are met. Match is contingent and disburses only when employees stay.",
          visual: (
            <div className="h-full flex items-center justify-center gap-8 p-8">
               <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center"
               >
                 <Shield className="w-8 h-8 text-primary" />
               </motion.div>
               <div className="h-1 w-24 bg-gray-200 rounded-full overflow-hidden">
                 <motion.div 
                   className="h-full bg-accent"
                   animate={{ width: ["0%", "100%"] }}
                   transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                 />
               </div>
               <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2, delay: 1 }}
                className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center"
               >
                 <Handshake className="w-8 h-8 text-accent" />
               </motion.div>
            </div>
          ),
        },
      ]
    : [
        {
          id: "emp1",
          colSpan: "col-span-12",
          title: "How the Money Works",
          desc: "Your contributions are always accessible. Employer match is contingent on tenure eligibility and disburses according to employer spend rules.",
          visual: (
            <div className="h-full flex items-center justify-center p-8">
               <div className="grid md:grid-cols-2 gap-6 w-full max-w-2xl">
                 <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-lg font-bold shadow-lg mb-4 mx-auto">You</div>
                    <h4 className="font-bold text-lg mb-2">Your Contributions</h4>
                    <p className="text-sm text-muted-foreground">Always yours. Accessible anytime.</p>
                 </div>
                 <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 text-center">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white text-lg font-bold shadow-lg mb-4 mx-auto">Co.</div>
                    <h4 className="font-bold text-lg mb-2">Employer Match</h4>
                    <p className="text-sm text-muted-foreground">Contingent on tenure eligibility. Employer-controlled.</p>
                 </div>
               </div>
            </div>
          ),
        },
        {
          id: "emp2",
          colSpan: "col-span-12",
          title: "Approved Travel Providers",
          desc: "Funds are redeemed through approved travel providers. WuunderFund is a payment method, not a travel agency. Employer match is contingent on tenure eligibility.",
          visual: (
            <div className="h-full flex items-center justify-center p-8">
               <div className="flex items-center gap-6">
                 <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center">
                   <Plane className="w-8 h-8 text-slate-400" />
                 </div>
                 <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center">
                   <Coins className="w-8 h-8 text-slate-400" />
                 </div>
                 <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center">
                   <Globe className="w-8 h-8 text-slate-400" />
                 </div>
               </div>
            </div>
          ),
        },
      ];

  return (
    <section className="py-24 container mx-auto px-4">
      <div className="mb-12 max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
          {isEmployer ? "Cost of Unsecured Talent Spend" : "Understanding Your Program"}
        </h2>
        <p className="text-xl text-muted-foreground">
          {isEmployer 
            ? "Upfront signing bonuses and retention incentives are wasted when employees leave early. Replace unsecured spend with payroll-embedded contingent matches."
            : "WuunderFund is an employer-funded program with eligibility-based access and approved spend channels. Employer match is contingent on tenure eligibility."}
        </p>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={cn(
              "bg-white rounded-3xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow overflow-hidden group",
              card.colSpan
            )}
            data-testid={`value-card-${card.id}`}
          >
            <div className="h-full flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">{card.title}</h3>
                <p className="text-muted-foreground">{card.desc}</p>
                {"qualifier" in card && card.qualifier && (
                  <p className="text-xs text-muted-foreground mt-2 italic">*{card.qualifier}</p>
                )}
              </div>
              <div className="flex-grow bg-gray-50 rounded-2xl overflow-hidden relative border border-gray-100">
                {card.visual}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
