import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar.jsx";
import logo from "../assets/images/logo.png";
import GameList from "../components/GameList.jsx";
import Footer from "../components/Footer.jsx";
import { getGamesByCategory } from "../services/api"; // استيراد الدالة من api.js

function Home() {
  const [newReleases, setNewReleases] = useState([]);
  const [popularGames, setPopularGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // جلب الألعاب الجديدة والأكثر شهرة من الـ API
    Promise.all([
      getGamesByCategory("new-releases"),
      getGamesByCategory("popular"),
    ])
      .then(([newReleasesData, popularGamesData]) => {
        setNewReleases(newReleasesData); // تعيين البيانات الجديدة
        setPopularGames(popularGamesData); // تعيين الألعاب الأكثر شهرة
        setLoading(false); // إيقاف حالة التحميل
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

  return (
    <>
      <header>
        <div className="container">
          <img src={logo} className="logo" alt="YAW KEYS logo" />
          <SearchBar />
          <ul className="nav">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about-games">About Games</a>
            </li>
            <li>
              <a href="#">User</a>
            </li>
            <li>
              Currency:
              <select name="" id="">
                <option value="US">US</option>
              </select>
            </li>
          </ul>
        </div>
        <h1
          style={{
            fontWeight: "600",
            textAlign: "center",
            width: "400px",
            margin: "auto",
            paddingBottom: "20px",
          }}
        >
          Quickly find your game using the search bar!
        </h1>
      </header>

      {/* عرض الألعاب الجديدة */}
      {newReleases.length > 0 && (
        <GameList typeGames="New Releases" games={newReleases} />
      )}

      {/* عرض الألعاب الأكثر شهرة */}
      {popularGames.length > 0 && (
        <GameList typeGames="Popular Games" games={popularGames} />
      )}

      <Footer />
    </>
  );
}

export default Home;
