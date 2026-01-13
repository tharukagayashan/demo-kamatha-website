import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-forest text-background">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <span className="text-secondary font-medium tracking-wider uppercase text-sm">
              Get In Touch
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-6">
              Contact Us
            </h2>
            <p className="text-background/80 mb-8 max-w-md">
              We'd love to hear from you. Whether you're planning a stay,
              a wedding, or just have questions, our team is here to help.
            </p>

            <div className="space-y-6">
              <a
                href="tel:+94763717024"
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-lg bg-background/10 flex items-center justify-center group-hover:bg-secondary transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-background/70 group-hover:text-secondary transition-colors">
                    076 371 7024
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-background/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Address</h4>
                  <p className="text-background/70">
                    42MH+73 Ambalantota, Sri Lanka
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-background/10 flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Check-in / Check-out</h4>
                  <p className="text-background/70">
                    Check-in: 14:00 • Check-out: 11:00
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden h-[400px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.9813762722974!2d81.02515397404355!3d6.13320432757776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae6bae3a64e801d%3A0x39e32713520462ea!2sKamatha%20Hotel%20%26%20Restaurant!5e0!3m2!1sen!2slk!4v1768044798695!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kamatha Hotel Location"
              className="transition-all duration-300"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
