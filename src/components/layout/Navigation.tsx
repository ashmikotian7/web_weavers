import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X, 
  Home, 
  Users, 
  Trophy, 
  BookOpen, 
  Network,
  LogIn,
  User
} from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { icon: Home, label: "Home", href: "#home" },
    { icon: Users, label: "About", href: "#about" },
    { icon: Users, label: "Team", href: "#team" },
    { icon: Trophy, label: "Achievements", href: "#achievements" },
    { icon: BookOpen, label: "Publications", href: "#publications" },
    { icon: Network, label: "Societies", href: "#societies" },
  ];

  const societies = [
    "Communication Society",
    "Computer Society", 
    "SIGHT",
    "WIE"
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-background/80 backdrop-blur-lg border-b border-border shadow-ieee-md' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 animate-fade-in-scale">
            <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center animate-pulse-3d">
              <span className="text-white font-bold text-lg">IEEE</span>
            </div>
            <div className="hidden md:block">
              <h1 className="font-bold text-lg gradient-text-ieee">
                IEEE Student Branch
              </h1>
              <p className="text-xs text-muted-foreground">
                Innovation • Excellence • Leadership
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg ieee-hover text-sm font-medium transition-colors hover:bg-muted"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </a>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline" size="sm" className="ieee-hover">
              <LogIn className="w-4 h-4 mr-2" />
              Login
            </Button>
            <Button className="btn-ieee-primary">
              <User className="w-4 h-4 mr-2" />
              Join IEEE
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border shadow-ieee-lg animate-fade-in-up">
            <div className="container mx-auto px-4 py-4">
              <div className="space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center space-x-3 p-3 rounded-lg ieee-hover hover:bg-muted transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="w-4 h-4" />
                    <span className="font-medium">{item.label}</span>
                  </a>
                ))}
                
                {/* IEEE Societies Submenu */}
                <div className="pl-7 space-y-1">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    IEEE Societies
                  </p>
                  {societies.map((society) => (
                    <a
                      key={society}
                      href={`#${society.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block p-2 text-sm rounded ieee-hover hover:bg-muted transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {society}
                    </a>
                  ))}
                </div>
                
                {/* Mobile Auth */}
                <div className="pt-4 border-t border-border space-y-2">
                  <Button variant="outline" className="w-full ieee-hover">
                    <LogIn className="w-4 h-4 mr-2" />
                    Login
                  </Button>
                  <Button className="w-full btn-ieee-primary">
                    <User className="w-4 h-4 mr-2" />
                    Join IEEE
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;