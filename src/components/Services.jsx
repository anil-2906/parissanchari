import "../styles/services.css";

const services = [
  { icon: "📄", title: "Visa Assistance", desc: "Guidance for Schengen visa documentation & appointments." },
  { icon: "✈️", title: "Airport Pickup & SIM", desc: "Pickup + local SIM activation support after landing." },
  { icon: "🗼", title: "Iconic Tours", desc: "Guided iconic spots + hidden gems locals know." },
  { icon: "🚗", title: "Travel Support", desc: "On-ground help for transport, navigation & emergencies." },
  { icon: "🗺️", title: "Paris Guidance", desc: "Day plan covering major attractions & experiences." },
  { icon: "📸", title: "Photoshoot Help", desc: "Best photo spots + assistance for memorable pics." },
  { icon: "🏨", title: "Hotel Support", desc: "Help with check-in and communication with hotel staff." },
  { icon: "📝", title: "Itinerary Planning", desc: "Custom itineraries based on budget, days & style." },
];

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <p className="services-subtitle">WHAT WE OFFER</p>
        <h2 className="services-title">Our Premium Services</h2>
        <p className="services-desc">
          Complete travel support in Telugu for Indian travelers visiting Paris & Europe. 
          From documentation to on-ground guidance, we handle it all.
        </p>

        <div className="services-grid">
          {services.map((s, i) => (
            <div key={i} className="service-card">
              <div className="service-icon-box">{s.icon}</div>
              <h3 className="service-card-title">{s.title}</h3>
              <p className="service-card-text">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}