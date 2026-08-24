import { useState } from "react";
import "../styles/contactForm.css";

const tripOptions = [
  "Paris Solo Trip",
  "Paris Couple Trip",
  "Paris Family Trip",
  "Paris Group Trip",
  "Personal Guide",
  "Switzerland Trip",
  "Custom Paris Trip",
];

const packageOptions = [
  "🥈 Silver Package",
  "🥇 Gold Package",
  "💎 Diamond Package",
];

export default function ContactForm({ closeForm }) {
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

🗼 *Trip:* ${formData.trip}

🏆 *Package:* ${formData.package}

👥 *Number of Travelers:* ${formData.travelers}

📅 *Travel Dates:*
From: ${formData.fromDate}
To: ${formData.toDate}

📝 *Additional Requirements:*
${formData.message || "No additional requirements mentioned."}

Please share the itinerary, inclusions and pricing.

Thank you! 🇫🇷`;

    const whatsappURL = `https://wa.me/919866883843?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="contact-form-section">

      <div className="contact-form-card">

        {/* CLOSE BUTTON */}

        {closeForm && (
          <button
            type="button"
            className="contact-form-close"
            onClick={closeForm}
            aria-label="Close form"
          >
            ×
          </button>
        )}

        {/* HEADER */}

        <div className="contact-form-header">

          <div className="form-plane">
            ✈️
          </div>

          <h2>
            PLAN YOUR PARIS JOURNEY
          </h2>

          <p>
            Tell us your travel details and we'll create
            a personalized Paris experience for you.
          </p>

        </div>

        {/* ITINERARY FEE NOTICE */}

        <div className="form-itinerary-notice">

          <div className="notice-icon">
            📋
          </div>

          <div className="notice-content">

            <strong>
              Personalized Itinerary — ₹1,500
            </strong>

            <p>
              A basic personalized itinerary planning fee of
              ₹1,500 applies. If you confirm your package,
              this amount will be adjusted against your final
              package amount.
            </p>

          </div>

        </div>

        {/* FORM */}

        <form
          className="paris-contact-form"
          onSubmit={handleSubmit}
        >

          {/* FULL NAME */}

          <div className="form-group full-width">

            <label htmlFor="fullName">
              FULL NAME
            </label>

            <input
              id="fullName"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              autoComplete="name"
              required
            />

          </div>


          {/* TRIP + PACKAGE */}

          <div className="form-row">

            <div className="form-group">

              <label htmlFor="trip">
                TRIP
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


            <div className="form-group">

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


          {/* NUMBER OF TRAVELERS */}

          <div className="form-group full-width">

            <label htmlFor="travelers">
              NUMBER OF TRAVELERS
            </label>

            <input
              id="travelers"
              type="number"
              name="travelers"
              value={formData.travelers}
              onChange={handleChange}
              min="1"
              max="50"
              required
            />

          </div>


          {/* DATES */}

          <div className="form-row date-row">

            <div className="form-group">

              <label htmlFor="fromDate">
                FROM DATE
              </label>

              <input
                id="fromDate"
                type="date"
                name="fromDate"
                value={formData.fromDate}
                onChange={handleChange}
                required
              />

            </div>


            <div className="form-group">

              <label htmlFor="toDate">
                TO DATE
              </label>

              <input
                id="toDate"
                type="date"
                name="toDate"
                value={formData.toDate}
                onChange={handleChange}
                required
              />

            </div>

          </div>


          {/* ADDITIONAL REQUIREMENTS */}

          <div className="form-group full-width">

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


          {/* WHATSAPP BUTTON */}

          <button
            type="submit"
            className="whatsapp-submit"
          >

            <span className="whatsapp-icon">
              💬
            </span>

            <span>
              SEND ENQUIRY VIA WHATSAPP
            </span>

            <span className="submit-arrow">
              →
            </span>

          </button>


          {/* FORM NOTE */}

          <p className="form-note">
            ✨ We'll contact you on WhatsApp with your
            personalized Paris itinerary and pricing.
          </p>

        </form>

      </div>

    </div>
  );
}