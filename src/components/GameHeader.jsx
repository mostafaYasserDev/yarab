import React, { useState, useEffect } from "react";
import { getData } from "../services/api"; // تأكد من استيراد دالة getData من ملف api.js

const GameHeader = ({ gameId }) => {
  const [gameData, setGameData] = useState(null);
  const [currentMedia, setCurrentMedia] = useState(null);

  useEffect(() => {
    // جلب بيانات اللعبة من الـ API باستخدام gameId
    getData(`/games/${gameId}`)
      .then((data) => {
        setGameData(data);
        setCurrentMedia(data.media[0]); // تعيين الوسيط الأول كـ default
      })
      .catch((error) => console.error("Error fetching game data:", error));
  }, [gameId]);

  // إذا كانت البيانات غير موجودة بعد التحميل
  if (!gameData) {
    return <div>Loading...</div>;
  }

  const { title, media } = gameData;

  const renderMedia = (item) => {
    if (item.type === "image") {
      return <img src={item.src} alt={title} className="main-media" />;
    }
    if (item.type === "video") {
      return (
        <iframe
          src={item.src}
          title={title}
          className="main-media"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      );
    }
  };

  return (
    <div className="game-header">
      <h1 style={{ fontWeight: "400", fontSize: "40px" }}>{title}</h1>
      <div className="main-media-container">{renderMedia(currentMedia)}</div>

      <div className="media-thumbnails">
        {media.map((item, index) => (
          <div
            key={index}
            className={`thumbnail ${
              currentMedia.src === item.src ? "active" : ""
            }`}
            onClick={() => setCurrentMedia(item)}
          >
            {item.type === "image" ? (
              <img src={item.src} alt={`${title} thumbnail ${index}`} />
            ) : (
              <div className="video-icon">⯈</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameHeader;
