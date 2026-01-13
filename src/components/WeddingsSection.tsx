import { Check, Users, Utensils, Music, Camera, Flower2 } from "lucide-react";
import weddingVenue from "@/assets/wedding-venue.jpg";
import weddingIndoor from "@/assets/wedding-indoor.jpg";

const packages = [
  {
    name: "Silver Package",
    price: "LKR 350,000",
    guests: "Up to 150 Guests",
    features: [
      "Venue decoration",
      "Buffet dinner",
      "DJ music system",
      "Basic photography",
      "Bridal room",
      "Parking facilities",
    ],
  },
  {
    name: "Gold Package",
    price: "LKR 550,000",
    guests: "Up to 250 Guests",
    popular: true,
    features: [
      "Premium venue decoration",
      "Luxury buffet with 20+ items",
      "Live band & DJ",
      "Professional photography",
      "Bridal suite for 2 nights",
      "Complimentary honeymoon dinner",
      "Custom cake",
      "VIP parking",
    ],
  },
  {
    name: "Platinum Package",
    price: "LKR 850,000",
    guests: "Up to 300 Guests",
    features: [
      "Exclusive venue customization",
      "Multi-cuisine buffet",
      "Live entertainment package",
      "Full day video & photography",
      "3-night honeymoon stay",
      "Spa treatment for couple",
      "Fireworks display",
      "Luxury transportation",
      "Event coordinator",
    ],
  },
];

const WeddingsSection = () => {
  return (
    <section id="weddings" className="section-padding bg-background">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-secondary font-medium tracking-wider uppercase text-sm">
            Celebrate With Us
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Wedding Packages
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Create unforgettable memories at our stunning venue that can accommodate up to 300 guests
            in a magical tropical setting.
          </p>
        </div>

        {/* Venue Gallery */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="relative rounded-xl overflow-hidden aspect-[4/3] group">
            <img
              src={weddingVenue}
              alt="Outdoor wedding venue at Kamatha Hotel"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/70 to-transparent" />
            <div className="absolute bottom-6 left-6 text-background">
              <h3 className="font-display text-2xl font-semibold">Garden Venue</h3>
              <p className="text-background/80 text-sm">Perfect for outdoor ceremonies</p>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden aspect-[4/3] group">
            <img
              src={weddingIndoor}
              alt="Indoor wedding reception hall at Kamatha Hotel"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/70 to-transparent" />
            <div className="absolute bottom-6 left-6 text-background">
              <h3 className="font-display text-2xl font-semibold">Grand Hall</h3>
              <p className="text-background/80 text-sm">Elegant indoor receptions</p>
            </div>
          </div>
        </div>

        {/* Features Icons */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-16">
          {[
            { icon: Users, label: "Up to 300 Guests" },
            { icon: Utensils, label: "Catering Service" },
            { icon: Music, label: "Entertainment" },
            { icon: Camera, label: "Photography" },
            { icon: Flower2, label: "Decorations" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-secondary" />
              </div>
              <span className="text-sm text-muted-foreground">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`bg-card rounded-xl p-8 card-hover relative flex flex-col h-full ${
                pkg.popular ? "ring-2 ring-accent shadow-medium" : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {pkg.name}
                </h3>
                <p className="text-muted-foreground text-sm">{pkg.guests}</p>
                <div className="mt-4">
                  <span className="font-display text-3xl font-bold text-foreground">
                    {pkg.price}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="tel:+94763717024"
                className={`block text-center py-3 rounded-lg font-semibold transition-all ${
                  pkg.popular
                    ? "btn-book w-full mt-auto"
                    : "btn-outline w-full mt-auto"
                }`}
              >
                Inquire Now
              </a>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-muted rounded-2xl p-8 md:p-12">
          <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
            Ready to Plan Your Special Day?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Our dedicated wedding coordinators are here to help you create the perfect celebration.
            Contact us for a personalized quote.
          </p>
          <a
            href="tel:+94763717024"
            className="btn-book inline-flex items-center gap-2 text-lg px-8 py-4"
          >
            Call Now: 076 371 7024
          </a>
        </div>
      </div>
    </section>
  );
};

export default WeddingsSection;
