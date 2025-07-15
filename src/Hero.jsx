
const Hero = () => {
  return (
    <main className="hero">
      <div className="hero-content">
        <p className="tagline">#1 Trending Shoes of 2025</p>
        <h1>YOUR FEET DESERVE <br /> THE BEST</h1>
        <p className="description">
          YOUR FEET DESERVE THE BEST AND <br />
          WE’RE HERE TO HELP YOU WITH OUR SHOES. <br />
          GO OUT AND PLAY.
        </p>

        <div className="btn">
          <button>Shop Now</button>
          <button>Category</button>
        </div>

        <div className="trust-info">
          <span>⭐ 4.9/5 TrustScore</span>
          <span>✔️ 10,000+ Happy Customers</span>
        </div>

        <div className="social-icons">
          <img src="face.jpeg" alt="Facebook" />
          <img src="insta.jpeg" alt="Instagram" />
          <img src="twit.png" alt="Twitter" />
        </div>
      </div>

      <div className="hero-image">
        <img src="logo1.jpeg" alt="Shoes" />
      </div>
    </main>
  );
};

export default Hero;
