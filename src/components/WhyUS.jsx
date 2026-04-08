import "../styles/whyus.css";

const features = [
  {
    icon: "🗣️",
    title: "Telugu-Speaking Guide",
    desc: "Communicate comfortably in Telugu — feel at home in Paris.",
  },
  {
    icon: "📍",
    title: "Paris Local Expert",
    desc: "Insider tips, routes and hidden gems tourists miss.",
  },
  {
    icon: "💰",
    title: "Transparent Pricing",
    desc: "No hidden fees — clear quotes upfront.",
  },
  {
    icon: "🤝",
    title: "On-Ground Support",
    desc: "Real-time help while you're in Paris.",
  },
  {
    icon: "🛡️",
    title: "Safe & Guided Travel",
    desc: "Avoid tourist traps and travel smart.",
  },
  {
    icon: "✨",
    title: "Personalized Experience",
    desc: "Trips tailored to your interests & pace.",
  },
];

export default function WhyUs() {
  return (
    <section className="why-section" id="whyus">
      <div className="why-container">
        <p className="why-subtitle">WHY CHOOSE PARIS SANCHARI</p>

        <h2 className="why-title">
          Your Trusted Guide in Paris
        </h2>

        <p className="why-desc">
          More than a guide — I'm your friend in Paris. From visa to return, I ensure your trip is hassle-free and memorable.
        </p>

        <div className="why-grid">
          {features.map((f, i) => (
            <div key={i} className="why-card">
              <div className="why-icon">{f.icon}</div>
              <h3 className="why-card-title">{f.title}</h3>
              <p className="why-card-text">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}