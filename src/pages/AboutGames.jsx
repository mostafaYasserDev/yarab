import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import GameHeader from "../components/GameHeader";
import AboutGame from "../components/AboutGame";
import Footer from "../components/Footer";
import { getGameById } from "../services/api"; // استيراد الدالة من ملف api.js

function AboutGames() {
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const gameId = "123"; // معرّف اللعبة
    getGameById(gameId) // استخدام دالة الـ API لجلب بيانات اللعبة
      .then((data) => {
        setGame(data); // تعيين بيانات اللعبة في حالة النجاح
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message); // التعامل مع الأخطاء
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>; // حالة التحميل
  }

  if (error) {
    return <p>Error: {error}</p>; // حالة الخطأ
  }

  if (!game) {
    return <p>No game data available.</p>; // إذا لم تكن هناك بيانات
  }

  return (
    <>
      <Header />
      <GameHeader title={game.title} media={game.media} />
      <AboutGame
        title={game.title}
        description={game.description}
        releaseDate={game.releaseDate}
        category={game.category}
        platforms={game.platforms}
      />
      <Footer />
    </>
  );
}

export default AboutGames;
