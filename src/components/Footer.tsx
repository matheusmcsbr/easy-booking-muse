
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="text-xl font-semibold tracking-tight">
              booksy.
            </Link>
            <p className="text-muted-foreground text-sm mt-2 max-w-xs">
              Simplifying the booking experience with elegant design and seamless integrations.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/#services" className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-300">
                  Book Now
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy" className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-300">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Contact</h3>
            <p className="text-muted-foreground text-sm">
              Have questions? <br />
              <a href="mailto:hello@booksy.com" className="text-foreground hover:underline">
                hello@booksy.com
              </a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Booksy. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              aria-label="Twitter"
            >
              Twitter
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              aria-label="Instagram"
            >
              Instagram
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-foreground transition-colors duration-300" 
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
