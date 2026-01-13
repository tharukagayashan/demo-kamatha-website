import { Wifi, Coffee, Car, Waves, Wind, Baby, Utensils, Clock } from "lucide-react";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomSuperior from "@/assets/room-superior.jpg";
import roomFamily from "@/assets/room-family.jpg";

const rooms = [
  {
    name: "Deluxe Room",
    description: "Cozy comfort with garden views, perfect for couples and solo travelers.",
    image: roomDeluxe,
    price: "LKR 6,500",
    features: ["Queen Bed", "Garden View", "Air Conditioning", "Free Wi-Fi"],
    size: "24 sqm",
  },
  {
    name: "Superior Room",
    description: "Spacious elegance with private balcony overlooking the tropical landscape.",
    image: roomSuperior,
    price: "LKR 8,655",
    features: ["King Bed", "Private Balcony", "Mini Bar", "Premium Amenities"],
    size: "32 sqm",
    popular: true,
  },
  {
    name: "Family Suite",
    description: "Generous space for the whole family with separate living area.",
    image: roomFamily,
    price: "LKR 12,000",
    features: ["2 Queen Beds", "Living Area", "Kid-Friendly", "Extra Space"],
    size: "45 sqm",
  },
];

const amenities = [
  { icon: Wifi, label: "Free Wi-Fi" },
  { icon: Coffee, label: "Free Breakfast" },
  { icon: Car, label: "Free Parking" },
  { icon: Waves, label: "Swimming Pool" },
  { icon: Wind, label: "Air Conditioned" },
  { icon: Baby, label: "Kid-Friendly" },
  { icon: Utensils, label: "Restaurant" },
  { icon: Clock, label: "24/7 Service" },
];

const RoomsSection = () => {
  return (
    <section id="rooms" className="section-padding bg-cream">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-secondary font-medium tracking-wider uppercase text-sm">
            Accommodations
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Our Rooms
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Clean, comfortable rooms with modern amenities. Check-in at 14:00, check-out at 11:00.
          </p>
        </div>

        {/* Amenities Row */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12 pb-12 border-b border-border">
          {amenities.map((amenity) => (
            <div key={amenity.label} className="flex items-center gap-2 text-muted-foreground">
              <amenity.icon className="w-5 h-5 text-primary" />
              <span className="text-sm">{amenity.label}</span>
            </div>
          ))}
        </div>

        {/* Rooms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {rooms.map((room) => (
            <div
              key={room.name}
              className={`bg-card rounded-xl overflow-hidden card-hover relative h-full flex flex-col  ${
                room.popular ? "ring-2 ring-secondary" : ""
              }`}
            >
              {room.popular && (
                <div className="absolute top-4 right-4 z-10 bg-secondary text-secondary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-1" >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {room.name}
                  </h3>
                  <span className="text-xs text-muted-foreground">{room.size}</span>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4">
                  {room.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {room.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                  <div>
                    <span className="font-display text-2xl font-bold text-foreground">
                      {room.price}
                    </span>
                    <span className="text-muted-foreground text-sm">/night</span>
                  </div>
                  <a
                    href="https://www.agoda.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-book text-sm px-4 py-2"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Booking Info */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm">
            For group bookings or special requests, please call us at{" "}
            <a href="tel:+94763717024" className="text-primary font-medium hover:underline">
              076 371 7024
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
