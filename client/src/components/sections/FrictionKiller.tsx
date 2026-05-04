import { Receipt, FileText, FileCheck, Zap, Database } from "lucide-react";

const items = [
  {
    icon: <Receipt className="w-5 h-5" />,
    title: "Post-tax Deduction",
    desc: "Clean payroll accounting",
  },
  {
    icon: <FileText className="w-5 h-5" />,
    title: "Taxable Fringe Benefit",
    desc: "Standardized classification",
  },
  {
    icon: <FileCheck className="w-5 h-5" />,
    title: "W-2 Reporting Included",
    desc: "Compliance automated",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "No Payroll Migration",
    desc: "Embeds into existing payroll",
  },
  {
    icon: <Database className="w-5 h-5" />,
    title: "Ledger-Based Tracking",
    desc: "Audit trail",
  },
];

export function FrictionKiller() {
  return (
    <section className="py-8 bg-slate-50 border-y border-slate-100">
      <div className="container mx-auto px-4">
        <div className="overflow-x-auto pb-2 -mx-4 px-4 md:overflow-visible md:mx-0 md:px-0">
          <div className="flex gap-3 md:grid md:grid-cols-5 md:gap-4 min-w-max md:min-w-0">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl border border-slate-200 shadow-sm flex-shrink-0 w-[200px] md:w-auto"
                data-testid={`friction-item-${index}`}
              >
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 flex-shrink-0">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-sm text-slate-800 truncate">{item.title}</div>
                  <div className="text-xs text-slate-500 truncate">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
