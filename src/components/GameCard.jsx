import React, { useState, useEffect } from "react";
import { getData } from "../services/api"; // تأكد من مسار api.js

function GameCard() {
  const [gameData, setGameData] = useState(null);

  useEffect(() => {
    // استدعاء API لجلب بيانات اللعبة
    getData("/games/12345") // المسار الخاص بـ API لجلب بيانات اللعبة حسب الـ ID
      .then((data) => setGameData(data))
      .catch((error) => console.error("Error fetching game data:", error));
  }, []);

  // إذا كانت البيانات غير موجودة بعد التحميل
  if (!gameData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <a href={gameData.detailsLink}>
        <div className="game-card">
          <img src={gameData.image} className="game-img" alt={gameData.title} />
          <span className="best-price">{gameData.price}$</span>
        </div>
      </a>
    </>
  );
}

export default GameCard;
