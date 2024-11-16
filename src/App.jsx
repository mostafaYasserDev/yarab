import "./App.css";
import Home from "./pages/Home.jsx";
import GameList from "./components/GameList.jsx";
import Footer from "./components/Footer.jsx";
import GamePrice from "./components/GamePrice.jsx";
import AboutGames from "./pages/AboutGames.jsx";
function App() {
  return (
    <>
      <Home />
      <GameList typeGames="New Releases" />
      <GameList typeGames="Best Sellers" />
      <Footer />
    </>
  );
}

export default App;
