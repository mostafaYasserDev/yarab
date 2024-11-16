const PriceTable = ({ prices }) => {
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
          {prices.map((price, index) => (
            <tr key={index}>
              <td>
                <img src={price.storeLogo} alt={price.store} />
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
          ))}
        </tbody>
        <tbody>
          {prices.map((price, index) => (
            <tr key={index}>
              <td>
                <img src={price.storeLogo} alt={price.store} />
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
          ))}
        </tbody>
        <tbody>
          {prices.map((price, index) => (
            <tr key={index}>
              <td>
                <img src={price.storeLogo} alt={price.store} />
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
          ))}
        </tbody>
        <tbody>
          {prices.map((price, index) => (
            <tr key={index}>
              <td>
                <img src={price.storeLogo} alt={price.store} />
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
          ))}
        </tbody>
        <tbody>
          {prices.map((price, index) => (
            <tr key={index}>
              <td>
                <img src={price.storeLogo} alt={price.store} />
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
          ))}
        </tbody>
        <tbody>
          {prices.map((price, index) => (
            <tr key={index}>
              <td>
                <img src={price.storeLogo} alt={price.store} />
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
          ))}
        </tbody>
        <tbody>
          {prices.map((price, index) => (
            <tr key={index}>
              <td>
                <img src={price.storeLogo} alt={price.store} />
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
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PriceTable;
