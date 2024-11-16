// src/components/CurrencySwitcher.js
import React from "react";
import { useCurrency } from "../context/CurrencyContext";

const CurrencySwitcher = () => {
  const { currency, setCurrency } = useCurrency();

  return (
    <div>
      <label>Change Currency: </label>
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="EGP">EGP</option>
      </select>
    </div>
  );
};

export default CurrencySwitcher;
