import GameCard from "./GameCard";

function GameList({ typeGames }) {
  return (
    <>
      <div className="container" style={{ margin: "auto" }}>
        <h1 className="game-list-title">
          {typeGames} <a href="">More like this</a>
        </h1>
      </div>
      <div className="game-list">
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
      </div>
    </>
  );
}

export default GameList;
