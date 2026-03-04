import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-gold/10 bg-background">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <Link to="/" className="font-display text-xl tracking-wider text-gold-gradient">
          SHAISNOOK
        </Link>
        <div className="flex gap-8">
          <Link to="/" className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors">
            Home
          </Link>
          <Link to="/contact" className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </Link>
        </div>
        <p className="font-body text-xs text-muted-foreground">
          © 2026 Shaisnook. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
