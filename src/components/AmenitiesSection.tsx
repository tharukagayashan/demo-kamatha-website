import { Wifi, Utensils, Car, Waves, Wind, Baby, Coffee, Dumbbell, Tv, ShowerHeadIcon, Clock, MapPin } from "lucide-react";

const amenities = [
  {
    icon: Wifi,
    title: "Free Wi-Fi",
    description: "Stay connected with complimentary high-speed internet throughout the property",
  },
  {
    icon: Utensils,
    title: "Restaurant",
    description: "Delicious Sri Lankan and international cuisine prepared by expert chefs",
  },
  {
    icon: Coffee,
    title: "Free Breakfast",
    description: "Start your day with our complimentary breakfast buffet",
  },
  {
    icon: Car,
    title: "Free Parking",
    description: "Secure parking facilities for all our guests",
  },
  {
    icon: Waves,
    title: "Swimming Pool",
    description: "Refresh yourself in our beautiful outdoor pool",
  },
  {
    icon: Wind,
    title: "Air Conditioning",
    description: "All rooms equipped with modern A/C systems",
  },
  {
    icon: Baby,
    title: "Kid-Friendly",
    description: "Family-friendly environment with activities for children",
  },
  {
    icon: Tv,
    title: "Flat-Screen TV",
    description: "Entertainment with cable channels in every room",
  },
  {
    icon: ShowerHeadIcon,
    title: "Hot Water",
    description: "24/7 hot water availability in all bathrooms",
  },
  {
    icon: Clock,
    title: "24/7 Reception",
    description: "Our friendly staff is available around the clock",
  },
  {
    icon: MapPin,
    title: "Great Location",
    description: "Easy access to local attractions and beaches",
  },
  {
    icon: Dumbbell,
    title: "Event Space",
    description: "Versatile spaces for meetings and celebrations",
  },
];

const AmenitiesSection = () => {
  return (
    <section id="amenities" className="section-padding bg-cream">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-secondary font-medium tracking-wider uppercase text-sm">
            What We Offer
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Hotel Amenities
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need for a comfortable and memorable stay
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {amenities.map((amenity) => (
            <div
              key={amenity.title}
              className="bg-card rounded-xl p-6 card-hover group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <amenity.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {amenity.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
