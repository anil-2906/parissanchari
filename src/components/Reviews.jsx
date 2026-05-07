import "../styles/reviews.css";

export default function Reviews() {
  return (
    <section className="reviews" id="reviews">

      <h2 className="review-title">
        Happy Travelers ✈️
      </h2>

      <div className="reels-wrapper">

        {/* Reel 1 */}
        <iframe
          src="https://www.instagram.com/reel/DXRLKKsDNGQ/embed"
          width="320"
          height="600"
          frameBorder="0"
          scrolling="no"
          allowTransparency="true"
          title="Client Reel 1"
        ></iframe>

        {/* Reel 2 */}
        <iframe
          src="https://www.instagram.com/reel/DXUt1BgjDm3/embed"
          width="320"
          height="600"
          frameBorder="0"
          scrolling="no"
          allowTransparency="true"
          title="Client Reel 2"
        ></iframe>

      </div>
    </section>
  );
}