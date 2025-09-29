import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border mt-16">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-muted-foreground">
        {/* Logo + Description */}
        <div>
          <h2 className="text-lg font-bold text-foreground">IEEE Student Branch</h2>
          <p className="text-xs mt-2">Innovation • Excellence • Leadership</p>
          <p className="mt-4">
            Advancing technology for humanity through collaborative learning and
            innovation.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-foreground mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-foreground">About Us</a></li>
            <li><a href="#" className="hover:text-foreground">Our Team</a></li>
            <li><a href="#" className="hover:text-foreground">Achievements</a></li>
            <li><a href="#" className="hover:text-foreground">Publications</a></li>
          </ul>
        </div>

        {/* Societies */}
        <div>
          <h3 className="font-semibold text-foreground mb-3">Societies</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-foreground">Communication Society</a></li>
            <li><a href="#" className="hover:text-foreground">Computer Society</a></li>
            <li><a href="#" className="hover:text-foreground">SIGHT</a></li>
            <li><a href="#" className="hover:text-foreground">WIE</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-foreground mb-3">Contact</h3>
          <ul className="space-y-2">
            <li>ieee@university.edu</li>
            <li>+1 (555) 123-4567</li>
            <li>Engineering Building, Room 301</li>
            <li>University Campus</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        © 2025 IEEE Student Branch. All rights reserved. Built with{" "}
        <Heart className="w-3 h-3 inline text-red-500" /> for innovation.
      </div>
    </footer>
  );
};

export default Footer;