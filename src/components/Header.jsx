import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar.jsx";
import { getData } from "../services/api"; // تأكد من استيراد دالة getData من api.js
import logo from "../assets/images/logo.png"; // إذا كنت تستخدم لوجو ثابت

function Header() {
  const [menuLinks, setMenuLinks] = useState([]);
  const [currencies, setCurrencies] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState("US");

  useEffect(() => {
    // جلب الروابط من الـ API (مثل الروابط الخاصة بالصفحات)
    getData("/menuLinks")
      .then((data) => setMenuLinks(data.links)) // تحديث حالة الروابط
      .catch((error) => console.error("Error fetching menu links:", error));

    // جلب العملات المدعومة من الـ API
    getData("/currencies")
      .then((data) => setCurrencies(data.currencies)) // تحديث حالة العملات
      .catch((error) => console.error("Error fetching currencies:", error));
  }, []);

  const handleCurrencyChange = (e) => {
    setSelectedCurrency(e.target.value); // تحديث العملة المحددة
  };

  return (
    <header>
      <div className="container">
        <img src={logo} className="logo" alt="Logo" />
        <SearchBar />
        <ul className="nav">
          {menuLinks.length > 0 ? (
            menuLinks.map((link) => (
              <li key={link.id}>
                <a href={link.url}>{link.title}</a>
              </li>
            ))
          ) : (
            <li>Loading links...</li>
          )}
          <li>
            Currency:
            <select value={selectedCurrency} onChange={handleCurrencyChange}>
              {currencies.length > 0 ? (
                currencies.map((currency) => (
                  <option key={currency.code} value={currency.code}>
                    {currency.name}
                  </option>
                ))
              ) : (
                <option>Loading currencies...</option>
              )}
            </select>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
