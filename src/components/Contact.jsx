import "../styles/contact.css";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "Paris",
    month: "Travel Month",
    travelerType: "Couple / Honeymoon", // Updated
    service: "Services Needed",
    budget: "Standard Range", // New field
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const sendWhatsApp = () => {
    const { name, phone, location, month, travelerType, service, budget } = formData;
    
    if(!name || !phone) {
      alert("Please enter your Name and WhatsApp number");
      return;
    }

    const message = `*New Trip Enquiry from Website* 🗼
------------------------------
👤 *Name:* ${name}
📱 *WhatsApp:* ${phone}
📍 *Destination:* ${location}
🗓️ *Travel Month:* ${month}
👥 *Traveler Type:* ${travelerType}
💼 *Services:* ${service}
💰 *Budget:* ${budget}
------------------------------
_Sent via Paris Sanchari Website_`;

    const url = `https://wa.me/919866883843?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        
        {/* LEFT SIDE: Content */}
        <div className="contact-left">
          <p className="subtitle">START PLANNING</p>
          <h2 className="contact-title">Plan Your Paris Adventure</h2>
          <p className="contact-desc">
            Share your travel plans and I will help you create the perfect Paris & Europe itinerary. 
            No commitment just honest guidance from a fellow Telugu traveler.
          </p>

          <div className="benefit-list">
            <div className="benefit-item">
              <span className="icon">✅</span>
              <p>Personalized itinerary within 24 hours</p>
            </div>
            <div className="benefit-item">
              <span className="icon">✅</span>
              <p>Visa guidance & documentation support</p>
            </div>
            <div className="benefit-item">
              <span className="icon">✅</span>
              <p>Local tips that save time & money</p>
            </div>
            <div className="benefit-item">
              <span className="icon">✅</span>
              <p>Direct WhatsApp communication</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Professional Form */}
        <div className="contact-right">
          <div className="form-card">
            <div className="input-group">
              <input type="text" placeholder="Your Name" id="name" onChange={handleChange} required />
              <input type="text" placeholder="WhatsApp with Country Code" id="phone" onChange={handleChange} required />
            </div>

            <div className="select-group">
              <select id="location" onChange={handleChange}>
                <option value="Paris">Paris Tour</option>
                <option value="Europe">Europe Combined</option>
                <option value="Custom">Custom Destination</option>
              </select>

              <select id="month" onChange={handleChange}>
                <option>Travel Month</option>
                <option>January</option> <option>February</option>
                <option>March</option> <option>April</option>
                <option>May</option> <option>June</option>
                <option>July</option> <option>August</option>
                <option>September</option> <option>October</option>
                <option>November</option> <option>December</option>
              </select>
            </div>

            <div className="select-group">
              <select id="travelerType" onChange={handleChange}>
                <option value="Solo Traveler">Solo Traveler</option>
                <option value="Couple / Honeymoon">Couple / Honeymoon</option>
                <option value="Family with Kids">Family with Kids</option>
                <option value="Group of Friends">Group of Friends</option>
              </select>

              <select id="budget" onChange={handleChange}>
                <option value="Standard">Budget: Standard</option>
                <option value="Premium">Budget: Premium</option>
                <option value="Luxury">Budget: Luxury</option>
              </select>
            </div>

            <div className="select-group">
              <select id="service" className="full-width" onChange={handleChange}>
                <option>Services Needed</option>
                <option>Full Tour Package (Flight+Hotel+Guide)</option>
                <option>Only Guided City Tour</option>
                <option>Visa Assistance Only</option>
                <option>Airport Pickup & Drop</option>
              </select>
            </div>

            <button className="whatsapp-btn" onClick={sendWhatsApp}>
               Send Enquiry via WhatsApp
            </button>

            <p className="form-footer">
              🔒 Your details are safe. I'll only contact you about your trip.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}