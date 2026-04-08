import "../styles/packages.css";

// Corrected Imports based on your File Explorer
import eiffeltower from "../assets/eiffeltower.jpg";
import coupleTrip from "../assets/coupleTrip.png"; 
import familyTrip from "../assets/familyTrip.jpg"; 
import disneyland from "../assets/disneyland.jpg";
import switzerland from "../assets/swiss.jpg";
import belgium from "../assets/belgium.jpg";

const packages = [
  {
    title: "Paris Romantic Tour",
    days: "3 Day",
    price: "Custom",
    image: eiffeltower,
  },
  {
    title: "Couple Special Trip",
    days: "3 Days",
    price: "Custom",
    image: coupleTrip,
  },
  {
    title: "Family Fun Package",
    days: " 3-4 Days",
    price: "Custom",
    image: familyTrip,
  },
  {
    title: "Disney Land",
    days: "1 Day",
    price: "Custom",
    image: disneyland,
  },
  {
    title: "Switzerland",
    days: "3 Days",
    price: "Custom",
    image: switzerland,
  },
  {
    title: "Belgium",
    days: "2 Days",
    price: "Custom",
    image: belgium,
  },
];

export default function Packages() {
  
  // WhatsApp Message generate chese function
  const getWhatsAppURL = (packageTitle) => {
    const phoneNumber = "919866883843";
    const message = `Hi Paris Sanchari! I am planning for the ${packageTitle}.Can you please share more details and pricing for this tour?`;
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  return (
    <section className="packages-section" id="packages">
      <p className="subtitle">EXPLORE WITH US</p>
      <h2 className="title">Popular Tour Packages</h2>

      <p className="desc">
        Custom itineraries for Paris and Europe — personalized to your interests, budget, and travel style.
      </p>

      <div className="packages-grid">
        {packages.map((pkg, i) => (
          <div className="package-card" key={i}>
            <div className="image-container">
               <img src={pkg.image} alt={pkg.title} loading="lazy" />
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

              <h3>{pkg.title}</h3>

              {/* Dynamic WhatsApp Link based on Package Title */}
              <a 
                href={getWhatsAppURL(pkg.title)} 
                target="_blank" 
                rel="noreferrer"
                className="enquire-link"
              >
                <button className="enquire-btn">Enquire Now</button>
              </a>
            </div>
          </div>
        ))}
      </div>

      <p className="bottom-text">
        Looking for something specific? 
        <a 
          href={`https://wa.me/919866883843?text=Hi Paris Sanchari! 👋 %0A%0AI want to plan a custom trip to Europe. Can you help?`} 
          target="_blank" 
          rel="noreferrer" 
          style={{color: '#facc15', textDecoration: 'none', marginLeft: '5px'}}
        >
          Tell us your travel plans →
        </a>
      </p>
    </section>
  );
}