import React from 'react';
import { useParams } from 'react-router-dom';
import './style.css';

const GamePage: React.FC = () => {
  const { gameId } = useParams<{ gameId: string }>();

  // 构建游戏的 URL
  const gameUrl = `/games/${gameId}/index.html`;
  console.log(gameId);

  return (
    <div className="game-container">
      <iframe
        src={gameUrl}
        title={`Playing ${gameId}`}
        width="360"
        height="640"
        frameBorder="0"
        allowFullScreen
        className="game-frame"
      ></iframe>
    </div>
  );
};

export default GamePage;