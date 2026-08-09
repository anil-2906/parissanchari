import { useState } from "react";
import "../styles/contact.css";

const tripOptions = [
  "Paris Solo Trip",
  "Paris Couple Trip",
  "Paris Family Trip",
  "Paris Group Trip",
  "Disneyland Paris Trip",
  "Personal Guide",
  "Custom Paris Trip",
];

const packageOptions = [
  "🥈 Silver Package",
  "🥇 Gold Package",
  "💎 Diamond Package",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    trip: "Paris Solo Trip",
    package: "🥈 Silver Package",
    travelers: "1",
    fromDate: "",
    toDate: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      alert("Please enter your full name.");
      return;
    }

    if (!formData.fromDate || !formData.toDate) {
      alert("Please select your travel dates.");
      return;
    }

    if (formData.toDate < formData.fromDate) {
      alert("To Date cannot be before From Date.");
      return;
    }

    const whatsappMessage = `🇫🇷 *PARIS SANCHARI – NEW TRAVEL ENQUIRY* 🇫🇷

👤 *Full Name:* ${formData.fullName}

🗼 *Paris Trip:* ${formData.trip}

🏆 *Package:* ${formData.package}

👥 *Number of Travelers:* ${formData.travelers}

📅 *Travel Dates:*
From: ${formData.fromDate}
To: ${formData.toDate}

📝 *Additional Requirements:*
${formData.message || "No additional requirements mentioned."}

Please share the itinerary, inclusions and pricing.

Thank you! 🇫🇷`;

    const whatsappURL =
      `https://wa.me/919866883843?text=${encodeURIComponent(
        whatsappMessage
      )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="contact-section" id="contact">

      {/* =========================================
          LEFT SIDE
      ========================================= */}

      <div className="contact-left">

        <p className="subtitle">
          START PLANNING
        </p>

        <h2 className="contact-title">
          Plan Your Paris Adventure
        </h2>

        <p className="contact-desc">
          Tell us about your Paris trip and we'll help you
          plan an unforgettable experience with personalized
          travel support.
        </p>

        <div className="benefit-list">

          <div className="benefit-item">
            <span className="icon">✓</span>
            <p>Personalized Paris itinerary</p>
          </div>

          <div className="benefit-item">
            <span className="icon">✓</span>
            <p>Visa guidance & documentation support</p>
          </div>

          <div className="benefit-item">
            <span className="icon">✓</span>
            <p>Airport pickup & Paris travel support</p>
          </div>

          <div className="benefit-item">
            <span className="icon">✓</span>
            <p>Direct WhatsApp communication</p>
          </div>

        </div>

        <div className="contact-highlight">


            <p>
              Tell us your requirements and we'll
              help plan your Paris experience.
            </p>
          </div>

        </div>

    


      {/* =========================================
          RIGHT SIDE
      ========================================= */}

      <div className="contact-right">

        <div className="form-card">

          {/* FORM HEADER */}

          <div className="form-heading">

            <div className="form-plane">
              ✈️
            </div>

            <h3>
              PLAN YOUR PARIS JOURNEY
            </h3>

            <p>
              Tell us your travel details and we'll create
              a personalized Paris experience for you.
            </p>

          </div>


          {/* FORM */}

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            {/* =====================================
                FULL NAME
            ===================================== */}

            <div className="field full-width">

              <label htmlFor="fullName">
                FULL NAME
              </label>

              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                autoComplete="name"
                required
              />

            </div>


            {/* =====================================
                PARIS TRIP + PACKAGE
            ===================================== */}

            <div className="form-row">

              <div className="field">

                <label htmlFor="trip">
                  PARIS TRIP
                </label>

                <select
                  id="trip"
                  name="trip"
                  value={formData.trip}
                  onChange={handleChange}
                >

                  {tripOptions.map((trip) => (
                    <option
                      key={trip}
                      value={trip}
                    >
                      {trip}
                    </option>
                  ))}

                </select>

              </div>


              <div className="field">

                <label htmlFor="package">
                  PACKAGE
                </label>

                <select
                  id="package"
                  name="package"
                  value={formData.package}
                  onChange={handleChange}
                >

                  {packageOptions.map((pkg) => (
                    <option
                      key={pkg}
                      value={pkg}
                    >
                      {pkg}
                    </option>
                  ))}

                </select>

              </div>

            </div>


            {/* =====================================
                NUMBER OF TRAVELERS
            ===================================== */}

            <div className="field full-width">

              <label htmlFor="travelers">
                NUMBER OF TRAVELERS
              </label>

              <input
                type="number"
                id="travelers"
                name="travelers"
                value={formData.travelers}
                onChange={handleChange}
                min="1"
                max="50"
                required
              />

            </div>


            {/* =====================================
                FROM DATE + TO DATE
            ===================================== */}

            <div className="form-row date-row">

              <div className="field">

                <label htmlFor="fromDate">
                  FROM DATE
                </label>

                <input
                  type="date"
                  id="fromDate"
                  name="fromDate"
                  value={formData.fromDate}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="field">

                <label htmlFor="toDate">
                  TO DATE
                </label>

                <input
                  type="date"
                  id="toDate"
                  name="toDate"
                  value={formData.toDate}
                  onChange={handleChange}
                  min={formData.fromDate || undefined}
                  required
                />

              </div>

            </div>


            {/* =====================================
                ADDITIONAL REQUIREMENTS
            ===================================== */}

            <div className="field full-width">

              <label htmlFor="message">
                ADDITIONAL REQUIREMENTS
              </label>

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Hotel, airport pickup, Disneyland, Eiffel Tower, personal guide, sightseeing, etc."
                rows="4"
              />

            </div>


            {/* =====================================
                WHATSAPP BUTTON
            ===================================== */}

            <button
              type="submit"
              className="whatsapp-btn"
            >

              <span className="whatsapp-icon">
                💬
              </span>

              <span>
                SEND ENQUIRY VIA WHATSAPP
              </span>

              <span className="btn-arrow">
                →
              </span>

            </button>


            {/* =====================================
                FOOTER NOTE
            ===================================== */}

            <p className="form-footer">
              ✨ We'll contact you on WhatsApp with your
              personalized Paris itinerary and pricing.
            </p>

          </form>

        </div>

      </div>

    </section>
  );
}