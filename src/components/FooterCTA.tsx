import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

export const FooterCTA = () => {
  return (
    <footer className="bg-background">
      <div className="border-t border-border/40 bg-muted/20 pt-16 pb-8 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand Column */}
            <div className="space-y-4">
              <h3 className="font-bold text-xl text-foreground">NUVO Auto Technologies Pvt Ltd</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                Precision manufacturing partners for OEMs. Delivering excellence in tubular assemblies and fabricated components since 2005.
              </p>
              <div className="pt-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                  ISO 9001:2015 Certified
                </span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Company</h4>
              <nav className="flex flex-col gap-3">
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors w-fit">Home</Link>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors w-fit">About Us</Link>
                <Link to="/quality" className="text-sm text-muted-foreground hover:text-primary transition-colors w-fit">Quality Assurance</Link>
                <Link to="/careers" className="text-sm text-muted-foreground hover:text-primary transition-colors w-fit">Careers</Link>
              </nav>
            </div>

            {/* Products */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Products</h4>
              <nav className="flex flex-col gap-3">
                <Link to="/products#steering-columns-with-brake-clutch-components" className="text-sm text-muted-foreground hover:text-primary transition-colors w-fit">Steering Columns</Link>
                <Link to="/products#fuel-hydraulic-tanks" className="text-sm text-muted-foreground hover:text-primary transition-colors w-fit">Fuel & Hydraulic Tanks</Link>
                <Link to="/products#fabricated-machined-components" className="text-sm text-muted-foreground hover:text-primary transition-colors w-fit">Fabricated & Machined</Link>
                <Link to="/products#linkages-assemblies" className="text-sm text-muted-foreground hover:text-primary transition-colors w-fit">Linkages Assemblies</Link>
                <Link to="/products#fanguard-for-harvester" className="text-sm text-muted-foreground hover:text-primary transition-colors w-fit">Fanguard</Link>
                <Link to="/products#banjo-body-assemblies" className="text-sm text-muted-foreground hover:text-primary transition-colors w-fit">Banjo Bodies</Link>
              </nav>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Contact</h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>
                  <strong className="text-foreground block mb-1">Factory Address:</strong>
                  Gat No. 1258, Weikfield Ind. Area,<br />
                  Off Pune-Nagar Road, Sanaswadi-PO, Shirur-Tal<br />
                  Pune - 412208<br />
                  MSME NO - MH-26-0185120<br />
                  Maharashtra - 412208, India
                </p>
                <p>
                  <strong className="text-foreground block mb-1">Email:</strong>
                  <a href="mailto:dhruv@nuvoautotech.com" className="hover:text-primary transition-colors">dhruv@nuvoautotech.com</a>
                </p>
                <p>
                  <strong className="text-foreground block mb-1">Phone:</strong>
                  <a href="tel:+919766552733" className="hover:text-primary transition-colors">+91-976-655-2733</a>
                </p>
              </div>
            </div>
          </div>

          <Separator className="mb-8" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} NUVO Auto Technologies Pvt Ltd. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
