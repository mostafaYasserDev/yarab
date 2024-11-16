import game from "../assets/images/game.jpg";
function GameCard() {
  return (
    <>
      <a href="">
        <div className="game-card">
          <img src={game} className="game-img" alt="game" />
          <span className="best-price">17.49$</span>
        </div>
      </a>
    </>
  );
}

export default GameCard;
