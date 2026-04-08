import { useState } from "react";
import "../styles/contactform.css";

export default function ContactForm({ closeForm }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    destination: "Paris Tour",
    fromDate: "",
    toDate: "",
    guests: "1",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hi Paris Sanchari! %0A%0A*New Trip Enquiry:* %0A- *Name:* ${formData.name} %0A- *Phone:* ${formData.phone} %0A- *Package:* ${formData.destination} %0A- *Travel Dates:* ${formData.fromDate} to ${formData.toDate} %0A- *No. of Persons:* ${formData.guests}`;
    const whatsappURL = `https://wa.me/919866883843?text=${message}`;
    window.open(whatsappURL, "_blank");
    closeForm();
  };

  return (
    <div className="form-overlay" onClick={closeForm}>
      <div className="form-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={closeForm}>&times;</button>
        
        <h2 className="form-title">Plan Your Journey</h2>
        <p className="form-subtitle">Fill in the details for a personalized quote</p>
        
        <form onSubmit={handleSubmit} className="booking-form">
          <div className="input-field">
            <label>Full Name</label>
            <input type="text" name="name" placeholder="Enter your name" required onChange={handleChange} />
          </div>
          
          <div className="input-field">
            <label>WhatsApp Number</label>
            <input type="tel" name="phone" placeholder="Enter your number" required onChange={handleChange} />
          </div>

          <div className="input-field">
            <label>Select Package</label>
            <select name="destination" onChange={handleChange}>
              <option value="Paris Tour">Paris Tour</option>
              <option value="Europe Combined">Europe Combined</option>
              <option value="Custom Trip">Custom Trip</option>
            </select>
          </div>

          <div className="input-field">
            <label>Number of Persons</label>
            <input type="number" name="guests" min="1" defaultValue="1" required onChange={handleChange} />
          </div>

          <div className="input-row">
            <div className="input-field half">
              <label>From Date</label>
              <input type="date" name="fromDate" required onChange={handleChange} />
            </div>
            <div className="input-field half">
              <label>To Date</label>
              <input type="date" name="toDate" required onChange={handleChange} />
            </div>
          </div>

          <button type="submit" className="submit-btn">Check Availability</button>
        </form>
      </div>
    </div>
  );
}