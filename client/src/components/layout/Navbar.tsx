import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logoImage from "@assets/1_1766161091735.png";
import type { Persona } from "@/pages/home";
import { DemoModal } from "@/components/modals/DemoModal";

interface NavbarProps {
  persona: Persona;
  setPersona: (p: Persona) => void;
}

export function Navbar({ persona, setPersona }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 cursor-pointer transition-opacity hover:opacity-80">
          <img src={logoImage} alt="WuunderFund Logo" className="w-10 h-10 object-contain mix-blend-multiply" />
          <span className="font-heading font-bold text-xl tracking-tight text-primary">
            WuunderFund
          </span>
        </Link>

        <div className="hidden md:flex items-center bg-gray-200/50 p-1 rounded-full border border-gray-200">
          <button
            onClick={() => setPersona("employer")}
            data-testid="nav-employer"
            className={cn(
              "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
              persona === "employer"
                ? "bg-white text-primary shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            For Employers
          </button>
          <button
            onClick={() => setPersona("partner")}
            data-testid="nav-partner"
            className={cn(
              "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
              persona === "partner"
                ? "bg-white text-primary shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            For Partners
          </button>
          <button
            onClick={() => setPersona("employee")}
            data-testid="nav-employee"
            className={cn(
              "px-4 py-2 rounded-full text-xs font-medium transition-all duration-300",
              persona === "employee"
                ? "bg-white text-primary shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            For Employees
          </button>
        </div>

        <div className="hidden md:block">
          {persona === "employer" ? (
            <DemoModal>
              <Button className="rounded-full bg-primary hover:bg-primary/90 text-white px-6" data-testid="cta-demo">
                Book a Demo
              </Button>
            </DemoModal>
          ) : persona === "partner" ? (
            <Button className="rounded-full bg-primary hover:bg-primary/90 text-white px-6" data-testid="cta-partner" asChild>
              <a href="mailto:partners@wuunderfund.com?subject=Partner Program Inquiry">Explore Partner Program</a>
            </Button>
          ) : null}
        </div>

        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-8 mt-8">
                <div className="flex flex-col gap-4">
                  <h3 className="font-heading font-semibold text-lg">I am...</h3>
                  <div className="flex flex-col gap-2">
                    <Button
                      variant={persona === "employer" ? "default" : "outline"}
                      onClick={() => {
                        setPersona("employer");
                        setIsOpen(false);
                      }}
                      className="justify-start"
                    >
                      An Employer
                    </Button>
                    <Button
                      variant={persona === "partner" ? "default" : "outline"}
                      onClick={() => {
                        setPersona("partner");
                        setIsOpen(false);
                      }}
                      className="justify-start"
                    >
                      A Partner
                    </Button>
                    <Button
                      variant={persona === "employee" ? "default" : "outline"}
                      onClick={() => {
                        setPersona("employee");
                        setIsOpen(false);
                      }}
                      className="justify-start"
                    >
                      An Employee
                    </Button>
                  </div>
                </div>
                {persona === "employer" && (
                  <DemoModal>
                    <Button className="w-full rounded-full">Book a Demo</Button>
                  </DemoModal>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
