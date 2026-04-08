import "../styles/contact.css";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "Paris",
    month: "Travel Month",
    people: "2 Travelers",
    service: "Services Needed",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const sendWhatsApp = () => {
    const { name, phone, location, month, people, service } = formData;
    
    if(!name || !phone) {
      alert("Please enter your Name and WhatsApp number");
      return;
    }

    const message = `*New Enquiry from Website* 🗼
------------------------------
*Name:* ${name}
*WhatsApp:* ${phone}
*Location:* ${location}
*Travel Month:* ${month}
*Travelers:* ${people}
*Services:* ${service}
------------------------------`;

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
            Share your travel plans and I'll help you create the perfect Paris & Europe itinerary. 
            No commitment — just honest guidance from a fellow Telugu traveler.
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
              <input type="text" placeholder="Your Name" id="name" onChange={handleChange} />
              <input type="text" placeholder="WhatsApp Number" id="phone" onChange={handleChange} />
            </div>

            <div className="select-group">
              <select id="location" onChange={handleChange}>
                <option value="Paris">Paris</option>
                <option value="Europe">Europe</option>
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
              <select id="people" onChange={handleChange}>
                <option>2 Travelers</option>
                <option>1 Traveler</option>
                <option>3 Travelers</option>
                <option>4+ Travelers</option>
              </select>

              <select id="service" onChange={handleChange}>
                <option>Services Needed</option>
                <option>Full Tour Package</option>
                <option>Visa Assistance Only</option>
                <option>Local Guide Support</option>
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