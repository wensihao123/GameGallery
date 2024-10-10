import "./style.css";
import GameCard from "./GameCard";

function Gallery() {
  const games = [
    {
      id: 1,
      title: "飞机大战",
      cover: "/games/PlaneFight/Cover.jpg",
      url: "/games/PlaneFight",
    },
    {
      id: 2,
      title: "见缝插针",
      cover: "/games/StickPin/Cover.jpg",
      url: "/games/StickPin",
    },
    // 更多游戏...
  ];

  return (
    <div className="gallery">
      <header className="App-header">
        <h1 className="gallery-title">小游戏集合</h1>
      </header>
      <div className="game-list">
        {games.map((game, index) => (
          <GameCard
            key={index}
            title={game.title}
            imageSrc={game.cover}
            gameUrl={game.url}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
