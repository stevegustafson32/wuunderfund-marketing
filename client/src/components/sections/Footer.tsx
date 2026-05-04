import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Instagram, Calendar } from "lucide-react";
import { DemoModal } from "@/components/modals/DemoModal";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 mb-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Ready to restructure talent spend?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-lg">
              See how payroll-embedded contingent matches convert upfront talent spend into measurable outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <DemoModal>
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-8 h-12 text-base font-semibold">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Walkthrough
                </Button>
              </DemoModal>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full h-12 px-8" asChild>
                <a href="mailto:sales@wuunderfund.com?subject=WuunderFund Sales Inquiry">Contact Sales</a>
              </Button>
            </div>
          </div>
          
          <div className="lg:pl-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
               <h3 className="text-xl font-bold mb-4">Contact Us</h3>
               <div className="flex items-center gap-3 mb-6">
                 <Mail className="w-5 h-5 text-accent" />
                 <a href="mailto:info@wuunderfund.com" className="hover:text-accent transition-colors">info@wuunderfund.com</a>
               </div>
               
               <div className="flex gap-4">
                 <a href="https://www.linkedin.com/company/wuunderfund/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all text-white border border-white/20">
                   <Linkedin className="w-5 h-5" />
                 </a>
                 <a href="https://www.instagram.com/wuunderfund/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all text-white border border-white/20">
                   <Instagram className="w-5 h-5" />
                 </a>
               </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <div>© 2026 WuunderFund. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
