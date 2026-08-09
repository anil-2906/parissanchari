import "../styles/packages.css";

import soloTrip from "../assets/solotrip.jpeg";
import coupleTrip from "../assets/coupleTrip.png";
import familyTrip from "../assets/familyTrip.jpg";
import disneylandTrip from "../assets/disneyland.jpg";
import personalGuide from "../assets/personalGuide.png";
import groupTrip from "../assets/grouptrip.png";


const packages = [
  {
    title: "Paris Solo Trip",
    days: "3 Days",
    price: "Custom",
    image: soloTrip,
  },
  {
    title: "Paris Couple Trip",
    days: "3 Days",
    price: "Custom",
    image: coupleTrip,
  },
  {
    title: "Paris Family Trip",
    days: "3–4 Days",
    price: "Custom",
    image: familyTrip,
  },
  {
    title: "Paris Group Trip",
    days: "3–4 Days",
    price: "Custom",
    image: groupTrip,
  },
  {
    title: "Disneyland Paris Trip",
    days: "1 Day",
    price: "Custom",
    image: disneylandTrip,
  },
  {
    title: "Personal Guide",
    days: "Up to 8 Hours",
    price: "Custom",
    image: personalGuide,
  },
  
];

const commonInclusions = [
  "✈️ Airport Pickup & Drop",
  "🗼 Eiffel Tower Top View",
  "🚢 Seine River Cruise",
  "🏛️ All Paris Iconic Places",
  "🎢 Disneyland Paris",
  "🚌 Big Bus Tour",
  "👨‍💼 Personal Guide — Up to 8 Hours",
  "📞 On call Support"
];

export default function Packages() {
  const getWhatsAppURL = (packageTitle) => {
    const phoneNumber = "919866883843";

    const message = `Hi Paris Sanchari! 👋

I am interested in the *${packageTitle}*.

Please share the package details, inclusions and pricing.

Thank you! 🇫🇷`;

    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
  };

  const customTripURL = `https://wa.me/919866883843?text=${encodeURIComponent(
    "Hi Paris Sanchari! 👋 I want to plan a custom Paris trip. Please help me with the itinerary and pricing."
  )}`;

  return (
    <section className="packages-section">

      {/* HEADER */}

      <p className="subtitle">
        EXPLORE WITH US
      </p>

      <h2 className="title">
        Paris Tour Packages
      </h2>

      <p className="desc">
        Explore Paris with our specially designed packages for
        solo travelers, couples, families and groups. Enjoy
        personalized travel support and unforgettable Paris
        experiences.
      </p>


      {/* PACKAGE CARDS */}

      <div className="packages-grid">

        {packages.map((pkg) => (
          <div
            className="package-card"
            key={pkg.title}
          >

            {/* IMAGE */}

            <div className="image-container">

              <img
                src={pkg.image}
                alt={`${pkg.title} - Paris tour package`}
                loading="lazy"
              />

              <div className="package-badge">
                🇫🇷 Paris
              </div>

            </div>


            {/* CONTENT */}

            <div className="package-content">

              <div className="top">

                <span>
                  ⏱ {pkg.days}
                </span>

                <span className="price">
                  Price: {pkg.price}
                </span>

              </div>


              <h3>
                {pkg.title}
              </h3>


              {/* WHATSAPP */}

              <a
                href={getWhatsAppURL(pkg.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="enquire-link enquire-btn"
              >
                <span>
                  Enquire This Package
                </span>

                <span>
                  →
                </span>
              </a>

            </div>

          </div>
        ))}

      </div>


      {/* EXPERIENCES & SERVICES */}

      <div className="common-inclusions">

        <h3>
          ✨ Our Paris Experiences & Services
        </h3>

        <p className="common-inclusions-subtitle">
          Depending on your selected package, we can arrange
          the following experiences and travel support.
        </p>

        <div className="common-inclusions-grid">

          {commonInclusions.map((item) => (
            <div
              className="common-inclusion-item"
              key={item}
            >

              <span>
                ✓
              </span>

              <p>
                {item}
              </p>

            </div>
          ))}

        </div>

      </div>


      {/* CUSTOM TRIP */}

      <p className="bottom-text">

        Need a customized Paris experience?

        <a
          href={customTripURL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Plan Your Custom Trip →
        </a>

      </p>

    </section>
  );
}