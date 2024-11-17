import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import GameHeader from "../components/GameHeader";
import PriceTable from "../components/PriceTable";
import FooterNote from "../components/FooterNote";
import Footer from "../components/Footer";
import Comments from "../components/Comments";
import { getGameById } from "../services/api"; // استيراد الدالة من ملف api.js

const GamePage = () => {
  const [game, setGame] = useState(null);
  const [prices, setPrices] = useState([]);
  const [warning, setWarning] = useState("");
  const [buttonText, setButtonText] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const gameId = "123"; // معرّف اللعبة
    getGameById(gameId) // استخدام الدالة لجلب بيانات اللعبة
      .then((data) => {
        setGame(data); // تعيين بيانات اللعبة في حالة النجاح
        setPrices(data.prices); // تعيين أسعار اللعبة
        setWarning(data.warning); // تعيين التحذير
        setButtonText(data.buttonText); // تعيين نص الزر
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
    <div>
      <Header />
      <GameHeader title={game.title} media={game.media} />
      <PriceTable prices={prices} />
      {warning && <FooterNote warning={warning} buttonText={buttonText} />}
      <Comments />
      <Footer />
    </div>
  );
};

export default GamePage;
