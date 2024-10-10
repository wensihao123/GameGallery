import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

interface GameCardProps {
  title: string;
  imageSrc: string;
  gameUrl: string;
}

const GameCard: React.FC<GameCardProps> = ({ title, imageSrc, gameUrl }) => {
  return (
    <div className="game-card">
      <Link to={gameUrl}>
        <img src={imageSrc} alt={title} className="game-image" />
        <h3 className="game-title">{title}</h3>
      </Link>
    </div>
  );
};

export default GameCard;
