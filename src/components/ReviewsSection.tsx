import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "KESHARA DENUWAN cute_focus",
    rating: 5,
    date: "1 month ago",
    text: "Best More Than Other Hotel In Ambalantota",
    badge: "Local Guide",
  },
  {
    name: "R.N. Madhusanka",
    rating: 5,
    date: "2 years ago",
    text: "Great place for a wedding 😇❤️",
    badge: "Local Guide",
  },
  {
    name: "Sachithra Akalanka",
    rating: 4,
    date: "4 months ago",
    text: "I recently visited to Kamatha Hotel for a wedding ceremony. It's a great hotel to have a wedding function. They offer reasonable wedding packages. The wedding venue can fit about nearly 300 people.",
    badge: "Local Guide",
  },
  {
    name: "P K",
    rating: 5,
    date: "1 year ago",
    text: "Its a hotel which shows the life cycle of a human with planting to harvest paddy. View is made mind day by day similar to the life. Very silent clean environment. Management and the staff are very friendly.",
    badge: "Local Guide",
  },
  {
    name: "Jerad Asanka Perera",
    rating: 5,
    date: "1 year ago",
    text: "We recently reached to Kamatha Hotel and had a pleasant experience. The rooms were clean and comfortable, and the staff was very friendly and helpful.",
    badge: "Local Guide",
  },
  {
    name: "Rajith Lakshan",
    rating: 5,
    date: "3 years ago",
    text: "Delicious food and well-served friendly staff. The rooms are excellent quality and the overall experience was wonderful.",
    badge: "Local Guide",
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="section-padding bg-background">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-secondary font-medium tracking-wider uppercase text-sm">
            Guest Experiences
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            What Our Guests Say
          </h2>
          
          {/* Overall Rating */}
          <div className="inline-flex items-center gap-4 bg-card rounded-xl px-6 py-4 shadow-soft mt-4">
            <div className="text-center">
              <span className="font-display text-4xl font-bold text-foreground">4.2</span>
              <div className="flex items-center gap-1 mt-1">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
                <Star className="w-4 h-4 fill-secondary/40 text-secondary" />
              </div>
            </div>
            <div className="h-12 w-px bg-border" />
            <div className="text-left">
              <p className="font-semibold text-foreground">149 Reviews</p>
              <p className="text-sm text-muted-foreground">on Google</p>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 card-hover relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-secondary/20" />
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="font-display text-lg font-bold text-primary">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{review.name}</h4>
                  <div className="flex items-center gap-2">
                    {review.badge && (
                      <span className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded">
                        {review.badge}
                      </span>
                    )}
                    <span className="text-xs text-muted-foreground">{review.date}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating
                        ? "fill-secondary text-secondary"
                        : "fill-muted text-muted"
                    }`}
                  />
                ))}
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/maps/place/Kamatha+Hotel+%26+Restaurant/@6.1332043,81.025154,17z/data=!4m11!3m10!1s0x3ae6bae3a64e801d:0x39e32713520462ea!5m2!4m1!1i2!8m2!3d6.133199!4d81.0277289!9m1!1b1!16s%2Fg%2F11ddzhcryy?entry=ttu&g_ep=EgoyMDI2MDExMS4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            View all reviews on Google Maps
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
