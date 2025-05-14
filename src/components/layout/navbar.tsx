
"use client";

import type { FC } from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Briefcase, Home, User, Mail, Award, FolderKanban } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

interface NavItem {
  href: string;
  label: string;
  target?: string;
  icon?: React.ReactNode;
  isExternal?: boolean;
}

const navItems: NavItem[] = [
  { href: "#home", label: "Home", icon: <Home className="h-5 w-5" /> },
  { href: "#about", label: "About", icon: <User className="h-5 w-5" /> },
  { href: "#projects", label: "Projects", icon: <FolderKanban className="h-5 w-5" /> },
  { href: "#certificates", label: "Certificates", icon: <Award className="h-5 w-5" /> },
  { href: "#contact", label: "Contact", icon: <Mail className="h-5 w-5" /> },
  {
    href: "https://drive.google.com/file/d/1uDr6txUq2GMDUuAG1P60Gp7R862DXwtA/view?usp=sharing",
    label: "Resume",
    target: "_blank",
    icon: <Briefcase className="h-5 w-5" />,
    isExternal: true
  },
];

const Navbar: FC = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = (id: string, isMobileLink: boolean = false) => {
    if (isMobileLink) setIsSheetOpen(false);
    const element = document.getElementById(id.substring(1)); // Remove # for getElementById
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLinkContent: FC<{ item: NavItem, isMobile?: boolean }> = ({ item, isMobile = false }) => (
    <>
      {item.icon && <span className={isMobile ? "mr-2" : ""}>{item.icon}</span>}
      {item.label}
    </>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="#home" passHref legacyBehavior>
          <a onClick={() => scrollToSection("#home")} className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
            DataFolio
          </a>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
          {navItems.map((item) =>
            item.isExternal ? (
              <Button key={item.label} variant="ghost" asChild className="text-foreground hover:text-primary hover:bg-primary/10">
                <Link href={item.href} target={item.target} rel="noopener noreferrer">
                  <NavLinkContent item={item} />
                </Link>
              </Button>
            ) : (
              <Button key={item.label} variant="ghost" onClick={() => scrollToSection(item.href)} className="text-foreground hover:text-primary hover:bg-primary/10">
                <NavLinkContent item={item} />
              </Button>
            )
          )}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-primary" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
              <div className="flex justify-between items-center mb-6">
                <Link href="#home" passHref legacyBehavior>
                  <a onClick={() => scrollToSection("#home", true)} className="text-2xl font-bold text-primary">
                    DataFolio
                  </a>
                </Link>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon">
                    <X className="h-6 w-6 text-primary" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </SheetClose>
              </div>
              <nav className="flex flex-col space-y-3">
                {navItems.map((item) =>
                  item.isExternal ? (
                    <Button key={item.label} variant="ghost" asChild className="justify-start text-lg text-foreground hover:text-primary hover:bg-primary/10">
                      <Link href={item.href} target={item.target} rel="noopener noreferrer" onClick={() => setIsSheetOpen(false)}>
                         <NavLinkContent item={item} isMobile />
                      </Link>
                    </Button>
                  ) : (
                    <Button key={item.label} variant="ghost" onClick={() => scrollToSection(item.href, true)} className="justify-start text-lg text-foreground hover:text-primary hover:bg-primary/10">
                       <NavLinkContent item={item} isMobile />
                    </Button>
                  )
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
