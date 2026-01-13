import { Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container-max section-padding py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <div className="w-3 h-3 rounded-full bg-secondary" />
                <div className="w-3 h-3 rounded-full bg-accent" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold">Kamatha</h3>
                <p className="text-xs tracking-wider text-background/60">
                  HOTEL & RESTAURANT
                </p>
              </div>
            </div>
            <p className="text-background/70 text-sm max-w-md mb-4">
              Experience the serenity of Sri Lankan hospitality amidst lush rice paddies 
              and tropical gardens. Your perfect getaway in Ambalantota.
            </p>
            <a
              href="tel:+94763717024"
              className="inline-flex items-center gap-2 text-secondary hover:underline"
            >
              <Phone className="w-4 h-4" />
              076 371 7024
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="#rooms" className="hover:text-secondary transition-colors">
                  Our Rooms
                </a>
              </li>
              <li>
                <a href="#weddings" className="hover:text-secondary transition-colors">
                  Wedding Packages
                </a>
              </li>
              <li>
                <a href="#amenities" className="hover:text-secondary transition-colors">
                  Amenities
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-secondary transition-colors">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-secondary transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Booking */}
          <div>
            <h4 className="font-semibold mb-4">Book Now</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a
                  href="https://www.agoda.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  Book on Agoda
                </a>
              </li>
              <li>
                <a
                  href="https://www.booking.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  Book on Booking.com
                </a>
              </li>
              <li>
                <a href="tel:+94763717024" className="hover:text-secondary transition-colors">
                  Direct Booking
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/60">
            © {currentYear} Kamatha Hotel & Restaurant. All rights reserved.
          </p>
          <p className="text-sm text-background/60">
            Ambalantota, Sri Lanka • ★★★ 3-Star Hotel
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
