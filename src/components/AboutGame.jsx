import React, { useEffect, useState } from "react";
import { fetchData } from "../services/api";

const AboutGame = () => {
  const [gameDetails, setGameDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadGameDetails = async () => {
      try {
        setLoading(true);
        const data = await fetchData("about-game");
        setGameDetails(data);
      } catch (err) {
        setError("Failed to load game details");
      } finally {
        setLoading(false);
      }
    };

    loadGameDetails();
  }, []);

  if (loading) return <p>Loading game details...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="about-container">
      <div className="container">
        <h1 className="title">About “{gameDetails.title}”</h1>
        <p className="description">{gameDetails.description}</p>
        <div className="details">
          <div className="detail-item">
            <strong>Game Type:</strong> {gameDetails.type}
          </div>
          <div className="detail-item">
            <strong>Features:</strong> {gameDetails.features.join(", ")}
          </div>
        </div>
        <h2 className="subtitle">{gameDetails.subtitle}</h2>
        <p className="description">{gameDetails.story}</p>
        <p className="description">{gameDetails.gameplay}</p>
        <p className="description">{gameDetails.atmosphere}</p>
        <div className="images">
          {gameDetails.screenshots.map((screenshot, index) => (
            <img
              key={index}
              src={screenshot}
              alt={`Game Screenshot ${index + 1}`}
              className="screenshot"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutGame;
