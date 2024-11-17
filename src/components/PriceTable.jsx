import React, { useEffect, useState } from "react";
import { getData } from "../services/api"; // تأكد من استيراد دالة getData من api.js

const PriceTable = ({ gameId }) => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    // جلب البيانات الخاصة بالأسعار من الـ API
    getData(`/prices/${gameId}`)
      .then((data) => setPrices(data.prices)) // تحديث حالة الأسعار
      .catch((error) => console.error("Error fetching prices:", error));
  }, [gameId]); // إعادة الجلب عند تغيير الـ gameId

  return (
    <div className="price-table">
      <h2>Price</h2>
      <div className="filters">
        <button>Filters:</button>
        <select>
          <option>DRM: Any</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>Store</th>
            <th>DRM</th>
            <th>Price</th>
            <th>Current</th>
          </tr>
        </thead>
        <tbody>
          {prices.length > 0 ? (
            prices.map((price, index) => (
              <tr key={index}>
                <td>
                  {/* إضافة رابط على الصورة للتوجه إلى موقع المتجر */}
                  <a
                    href={price.storeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={price.storeLogo} alt={price.store} />
                  </a>
                </td>
                <td>
                  <img src={price.drm} alt={price.drm} />
                </td>
                <td>{price.price}</td>
                <td>
                  <span>{price.currentPrice}</span>
                  <span className="discount">{price.discount}</span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">Loading prices...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PriceTable;
