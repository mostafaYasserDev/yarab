import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-brand">
          <img src={logo} alt="logo" className="logo" />
          <p>Find the best deals on your favorite games, all in one place.</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Games</li>
            <li>About Games</li>
          </ul>
        </div>
        <div className="footer-subscribe">
          <h4>Subscribe</h4>
          <form>
            <input
              type="email"
              placeholder="Get Games updates"
              aria-label="Enter your email"
            />
            <button type="submit">➜</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="social-icons">
          <a href="#" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" aria-label="Facebook">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <p>© 2024 Made by mostafaYasserDev</p>
      </div>
    </footer>
  );
};

export default Footer;
