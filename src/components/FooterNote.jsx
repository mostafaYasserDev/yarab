import React from "react";

const FooterNote = ({ warning, buttonText }) => {
  return (
    <div className="footer-note">
      <p className="warning">{warning}</p>
      <button className="cta-button">
        <span>!</span>
        {buttonText}
      </button>
    </div>
  );
};

export default FooterNote;
