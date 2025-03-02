export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p>SALE! UP TO 50% OFF!</p>
          <h1>Summer Sale Collections</h1>
        </div>

        <button className="hero-btn">SHOP NOW</button>
      </div>

      <div className="next-prev">
        <button className="dot-btn selected"></button>
        <button className="dot-btn"></button>
        <button className="dot-btn"></button>
      </div>
    </section>
  );
}
