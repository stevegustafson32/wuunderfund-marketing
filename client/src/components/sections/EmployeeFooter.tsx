import { Mail, Linkedin, Instagram } from "lucide-react";

export function EmployeeFooter() {
  return (
    <footer className="bg-primary text-white pt-16 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto mb-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-xl font-bold mb-4">Questions about your program?</h3>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Contact your HR department to learn about WuunderFund availability and enrollment at your company.
            </p>
            <div className="flex items-center gap-3 mb-6">
              <Mail className="w-5 h-5 text-accent" />
              <a href="mailto:info@wuunderfund.com" className="hover:text-accent transition-colors text-sm">info@wuunderfund.com</a>
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
