import "../styles/packages.css";

import eiffeltower from "../assets/eiffeltower.jpg";
import coupleTrip from "../assets/coupleTrip.png"; 
import familyTrip from "../assets/familyTrip.jpg"; 
import disneyland from "../assets/disneyland.jpg";
import switzerland from "../assets/swiss.jpg";
import belgium from "../assets/belgium.jpg";

const packages = [
  {
    title: "Paris Romantic Tour",
    days: "3 Days",
    price: "Custom",
    image: eiffeltower,
  },
  {
    title: "Couple Paris Trip",
    days: "3 Days",
    price: "Custom",
    image: coupleTrip,
  },
  {
    title: "Paris Family Package",
    days: "3-4 Days",
    price: "Custom",
    image: familyTrip,
  },
  {
    title: "Disneyland Paris Tour",
    days: "1 Day",
    price: "Custom",
    image: disneyland,
  },
  {
    title: "Switzerland Tour from Paris",
    days: "3 Days",
    price: "Custom",
    image: switzerland,
  },
  {
    title: "Belgium Trip from Paris",
    days: "2 Days",
    price: "Custom",
    image: belgium,
  },
];

export default function Packages() {

  const getWhatsAppURL = (packageTitle) => {
    const phoneNumber = "919866883843";
    const message = `Hi Paris Sanchari! I am planning for the ${packageTitle}. Can you please share details and pricing for this tour?`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section className="packages-section" id="packages">

      {/* ✅ Hidden SEO heading */}
      <h2 style={{ display: "none" }}>
        Paris Tour Packages from India | Europe Trip Packages for Indians
      </h2>

      <p className="subtitle">EXPLORE WITH US</p>

      {/* Visible title */}
      <h2 className="title">Popular Paris & Europe Tour Packages</h2>

      <p className="desc">
        Explore our Paris tour packages from India designed for couples, families, and solo travelers. Get complete travel support including visa assistance, itinerary planning, and guided tours.
      </p>

      {/* India targeting */}
      <p style={{ display: "none" }}>
        Packages available for travelers from Hyderabad, Mumbai, Delhi, Bangalore and across India planning Europe trips.
      </p>

      <div className="packages-grid">
        {packages.map((pkg, i) => (
          <div className="package-card" key={i}>

            <div className="image-container">
              <img
                src={pkg.image}
                alt={`${pkg.title} - Paris tour package for Indians`}
                loading="lazy"
              />
            </div>

            <div className="package-content">
              <div className="top">
                <span>⏱ {pkg.days}</span>
                <span className="price">
                  {pkg.price === "Custom"
                    ? "Price: Custom"
                    : `€${pkg.price}`}
                </span>
              </div>

              {/* ✅ SEO optimized H3 */}
              <h3>{pkg.title}</h3>

              <a
                href={getWhatsAppURL(pkg.title)}
                target="_blank"
                rel="noreferrer"
                className="enquire-link"
              >
                <button className="enquire-btn">
                  Enquire This Package →
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>

      <p className="bottom-text">
        Looking for a custom Paris or Europe trip from India?
        <a
          href={`https://wa.me/919866883843?text=${encodeURIComponent(
            "Hi Paris Sanchari! I want to plan a custom Europe trip from India. Can you help?"
          )}`}
          target="_blank"
          rel="noreferrer"
          style={{ color: "#facc15", textDecoration: "none", marginLeft: "5px" }}
        >
          Plan your trip →
        </a>
      </p>
    </section>
  );
}