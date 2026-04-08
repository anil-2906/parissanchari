import "../styles/hero.css";
import { useState } from "react";
import { Helmet } from "react-helmet";
import eiffelImage from "../assets/background1.png";
import ContactForm from "../components/contactform";

export default function Hero() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      {/* ✅ SEO */}
      <Helmet>
        <title>Paris Trip from India | Paris Sanchari Travel Guide</title>

        <meta
          name="description"
          content="Plan your Paris trip from India with Paris Sanchari. Telugu travel guide in Paris offering visa assistance, airport pickup, and personalized tours."
        />

        <meta
          name="keywords"
          content="Paris trip from India, Telugu travel guide Paris, France visa for Indians, Paris tour package India"
        />

        <meta name="author" content="Paris Sanchari" />

        {/* Social preview */}
        <meta property="og:title" content="Paris Trip from India | Paris Sanchari" />
        <meta property="og:description" content="Helping Indian travelers explore Paris with visa help and local support." />
        <meta property="og:image" content="/background1.png" />
        <meta property="og:url" content="https://www.parissanchari.com" />
      </Helmet>

      <section
        className="hero"
        style={{ backgroundImage: `url(${eiffelImage})` }}
      >
        <div className="hero-overlay"></div>

        <div className="hero-container">
          <div className="hero-content">

            {/* Badge */}
            <div className="hero-badge">
              ⭐ Telugu Travel Guide in Paris
            </div>

            <p className="hero-subtitle">EXPLORE WITH US</p>

            {/* ✅ MAIN BRANDING H1 */}
            <h1 className="hero-title">
              <span className="light">Experience Paris</span>
              <span className="bold">Like Never Before</span>
            </h1>

            {/* ✅ SEO SUBTITLE (VISIBLE KEYWORDS) */}
            <h2 className="seo-subtitle">
              Paris Trip from India | Travel Guide for Indian Tourists
            </h2>

            {/* Description */}
            <p className="hero-description">
            Paris Sanchari helps Indian travelers with France visa assistance, airport pickup, and personalized Paris city tours with Telugu support.
            </p>

            {/* Hidden SEO boost */}
            <p style={{ display: "none" }}>
              Paris trip from India, France visa for Indians, Paris travel guide India, Europe trip planning from India.
            </p>

            <div className="hero-btns">
              <button
                className="btn-fill"
                onClick={() => setShowForm(true)}
              >
                Book Paris Trip →
              </button>

              <button
                className="btn-outline"
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Our Services
              </button>
            </div>

          </div>
        </div>

        {showForm && <ContactForm closeForm={() => setShowForm(false)} />}
      </section>
    </>
  );
}