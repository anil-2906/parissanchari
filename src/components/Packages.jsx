import "../styles/packages.css";

import soloTrip from "../assets/solotrip.jpeg";
import coupleTrip from "../assets/coupleTrip.png";
import familyTrip from "../assets/familyTrip.jpg";
import personalGuide from "../assets/personalGuide.png";
import groupTrip from "../assets/grouptrip.png";
import switzerlandTrip from "../assets/switzerland.jpg";

const packages = [
  {
    title: "Paris Solo Trip",
    days: "3 Days",
    startFrom: "₹69,999",
    image: soloTrip,
  },
  {
    title: "Paris Couple Trip",
    days: "3 Days",
    startFrom: "₹89,999",
    image: coupleTrip,
  },
  {
    title: "Paris Family Trip",
    days: "3–4 Days",
    startFrom: "₹1,89,999",
    image: familyTrip,
  },
  {
    title: "Paris Group Trip",
    days: "3–4 Days",
    startFrom: "₹59,999",
    image: groupTrip,
  },
  {
    title: "Personal Guide",
    days: "Up to 8 Hours",
    startFrom: "₹2,999",
    image: personalGuide,
  },
  {
    title: "Switzerland Trip",
    days: "5 Nights / 6 Days",
    startFrom: "₹1,49,999",
    image: switzerlandTrip,
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
  "📞 On Call Support",
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


      {/* ITINERARY PLANNING INFO */}

      <div className="itinerary-info">

        <div className="itinerary-icon">
          📋
        </div>

        <div className="itinerary-content">

          <h3>
            Personalized Itinerary Planning
          </h3>

          <p>
            Get a basic personalized itinerary based on your
            travel dates, number of travelers and requirements.
          </p>

          <div className="itinerary-fee">
            <span>
              Planning Fee
            </span>

            <strong>
              ₹1,500
            </strong>
          </div>

          <small>
            ✓ If you confirm your package with us, the ₹1,500
            will be adjusted against your final package amount.
          </small>

        </div>

      </div>


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
                {pkg.title === "Switzerland Trip"
                  ? "🇨🇭 Switzerland"
                  : "🇫🇷 Paris"}
              </div>

            </div>


            {/* CONTENT */}

            <div className="package-content">

              <div className="top">

                <span>
                  ⏱ {pkg.days}
                </span>

                <span className="price">
                  Starting from: {pkg.startFrom}
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