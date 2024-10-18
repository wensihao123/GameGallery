import "./style.css";
import GameCard from "./GameCard";

function Gallery() {
  const games = [
    {
      id: 1,
      title: "2048",
      cover: "/games/2048/Cover.jpg",
      url: "/games/2048",
    },
    {
      id: 2,
      title: "飞机大战",
      cover: "/games/PlaneFight/Cover.jpg",
      url: "/games/PlaneFight",
    },
    {
      id: 3,
      title: "见缝插针",
      cover: "/games/StickPin/Cover.jpg",
      url: "/games/StickPin",
    },
    {
      id: 4,
      title: "趣味套牛",
      cover: "/games/CatchCow/Cover.jpg",
      url: "/games/CatchCow",
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
