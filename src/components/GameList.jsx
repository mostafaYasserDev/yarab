import React, { useState, useEffect } from "react";
import GameCard from "./GameCard";
import { getData } from "../services/api"; // تأكد من استيراد دالة getData من api.js

function GameList({ typeGames }) {
  const [games, setGames] = useState([]);

  useEffect(() => {
    // جلب الألعاب حسب التصنيف (typeGames) من الـ API
    getData(`/games?type=${typeGames}`)
      .then((data) => setGames(data.games)) // تحديث حالة الألعاب بعد جلب البيانات
      .catch((error) => console.error("Error fetching games:", error));
  }, [typeGames]);

  return (
    <>
      <div className="container" style={{ margin: "auto" }}>
        <h1 className="game-list-title">
          {typeGames} <a href="">More like this</a>
        </h1>
      </div>
      <div className="game-list">
        {games.length > 0 ? (
          games.map((game) => (
            <GameCard
              key={game.id}
              title={game.title}
              price={game.price}
              image={game.image}
              gameId={game.id}
            />
          ))
        ) : (
          <div>Loading games...</div>
        )}
      </div>
    </>
  );
}

export default GameList;
