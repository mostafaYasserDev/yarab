import React, { useState, useEffect } from "react";
import { getData } from "../services/api";

const Footer = () => {
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    getData("/footer-data")
      .then((data) => setFooterData(data))
      .catch((error) => console.error("Error fetching footer data:", error));
  }, []);

  if (!footerData) {
    return <footer>Loading...</footer>; // عرض رساله تحميل أثناء جلب البيانات
  }

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-brand">
          <img src={footerData.logo} alt="logo" className="logo" />
          <p>{footerData.brandDescription}</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            {footerData.quickLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-subscribe">
          <h4>Subscribe</h4>
          <form>
            <input
              type="email"
              placeholder={footerData.subscribePlaceholder}
              aria-label="Enter your email"
            />
            <button type="submit">➜</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="social-icons">
          {footerData.socialLinks.map((social, index) => (
            <a key={index} href={social.url} aria-label={social.name}>
              <i className={`fab fa-${social.name.toLowerCase()}`}></i>
            </a>
          ))}
        </div>
        <p>{footerData.footerText}</p>
      </div>
    </footer>
  );
};

export default Footer;
