import React, { useState, useEffect } from "react";
import { getData } from "../services/api"; // تأكد من مسار api.js

const FooterNote = () => {
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    // استدعاء API لجلب بيانات التحذير
    getData("/footer-note") // المسار الخاص بـ API لجلب التحذير
      .then((data) => setFooterData(data))
      .catch((error) =>
        console.error("Error fetching footer note data:", error)
      );
  }, []);

  if (!footerData || !footerData.warning) {
    return null;
  }

  return (
    <div className="footer-note">
      <p className="warning">{footerData.warning}</p>
      <button className="cta-button">
        <span>!</span>
        {footerData.buttonText}
      </button>
    </div>
  );
};

export default FooterNote;
