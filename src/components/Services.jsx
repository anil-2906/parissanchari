import "../styles/services.css";

const services = [
  { icon: "📄", title: "France Visa Assistance", desc: "Complete guidance for Schengen visa for Indians including documents and appointment booking." },
  { icon: "✈️", title: "Airport Pickup & SIM", desc: "Paris airport pickup with local SIM card activation for Indian travelers." },
  { icon: "🗼", title: "Paris City Tours", desc: "Guided tours covering Eiffel Tower, Louvre, and hidden gems in Paris." },
  { icon: "🚗", title: "Local Travel Support", desc: "On-ground help for transport, metro navigation, and emergency support in Paris." },
  { icon: "🗺️", title: "Paris Trip Planning", desc: "Day-wise planning for Paris trip from India with best attractions and experiences." },
  { icon: "📸", title: "Photoshoot Assistance", desc: "Best Instagram photo spots in Paris with shooting guidance." },
  { icon: "🏨", title: "Hotel Check-in Support", desc: "Help with hotel check-in, communication, and booking support." },
  { icon: "📝", title: "Custom Itinerary", desc: "Personalized Paris and Europe itinerary planning based on budget and travel style." },
];

export default function Services() {
  return (
    <section className="services-section" id="services">

      {/* ✅ Hidden SEO content */}
      <h2 style={{ display: "none" }}>
        Paris Travel Services for Indian Tourists | Visa, Tours, Itinerary
      </h2>

      <div className="services-container">
        <p className="services-subtitle">WHAT WE OFFER</p>

        {/* Visible heading (branding + SEO balance) */}
        <h2 className="services-title">Our Premium Paris Travel Services</h2>

       

        {/* India targeting signal */}
        <p style={{ display: "none" }}>
          Services available for travelers from Hyderabad, Mumbai, Delhi, Bangalore, and across India planning a Paris trip.
        </p>

        <div className="services-grid">
          {services.map((s, i) => (
            <div key={i} className="service-card">

              {/* Icon */}
              <div className="service-icon-box">{s.icon}</div>

              {/* ✅ H3 SEO optimized */}
              <h3 className="service-card-title">
                {s.title}
              </h3>

              {/* Description */}
              <p className="service-card-text">
                {s.desc}
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}