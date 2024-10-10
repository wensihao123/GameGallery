import React from "react";
import "./App.css";
import Gallery from "./components/Gallery";
import GamePage from "./components/GamePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="gallery-title">小游戏集合</h1>
        </header>
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/games/:gameId" element={<GamePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
