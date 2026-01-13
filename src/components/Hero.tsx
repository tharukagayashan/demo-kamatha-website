import { Star, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-hotel.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Kamatha Hotel & Restaurant - Luxury accommodation in Ambalantota"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/60 via-forest/40 to-forest/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-max section-padding text-center text-background">
        <div className="max-w-4xl mx-auto animate-fade-up">
          {/* Rating Badge */}
          <div className="inline-flex items-center gap-2 bg-background/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <div className="flex items-center gap-1">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
              ))}
              <Star className="w-4 h-4 fill-secondary/40 text-secondary" />
            </div>
            <span className="text-sm font-medium">4.2 • 149 Reviews</span>
          </div>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Welcome to{" "}
            <span className="text-gradient-gold">Kamatha</span>
          </h1>
          
          <p className="text-lg md:text-xl text-background/90 mb-4 max-w-2xl mx-auto">
            Experience the serenity of Sri Lankan hospitality amidst lush rice paddies 
            and tropical gardens in Ambalantota
          </p>

          <p className="text-sm text-background/70 mb-8">
            ★ 3-Star Hotel & Restaurant • Weddings • Events
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#rooms" className="btn-book text-lg px-8 py-4">
              View Rooms & Book
            </a>
            <a href="#weddings" className="btn-outline border-background/50 text-background hover:bg-background hover:text-foreground text-lg px-8 py-4">
              Wedding Packages
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-background/60" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
