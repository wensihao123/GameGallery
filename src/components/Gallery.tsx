import "./style.css";
import GameCard from "./GameCard";
import { useEffect, useState } from "react";

type TelegramUser = {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
};

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
      title: "2D弹球",
      cover: "/games/PinBall/Cover.jpg",
      url: "/games/PinBall",
    },
    {
      id: 3,
      title: "飞机大战",
      cover: "/games/PlaneFight/Cover.jpg",
      url: "/games/PlaneFight",
    },
    {
      id: 4,
      title: "见缝插针",
      cover: "/games/StickPin/Cover.jpg",
      url: "/games/StickPin",
    },
    {
      id: 5,
      title: "趣味套牛",
      cover: "/games/CatchCow/Cover.jpg",
      url: "/games/CatchCow",
    },
    // 更多游戏...
  ];

  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    if ((window as any).Telegram?.WebApp) {
      const tg = (window as any).Telegram.WebApp;
      console.log(tg);
      tg.expand();
      const user: TelegramUser | undefined = tg.initDataUnsafe?.user;
      if (user) {
        setUsername(user.username || "NoName");
      } else {
        setUsername("Cannot get username");
      }
      tg.MainButton.setText("继续");
      tg.MainButton.show();
    } else {
      setUsername("Telegram not found");
    }
  }, []);

  return (
    <div className="gallery">
      <header className="App-header">
        <h1 className="gallery-title">小游戏集合</h1>
        <p>{username}</p>
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
