import React from "react";

function EndGame({ clearHistory, winCount, restartGame, player, draw }) {
  return (
    <div className="end-game-screen">
      {!draw && <span className="win-text">{player ? "B WON" : "A WON"}</span>}
      {draw && <span className="win-text">GAME DRAW</span>}

      <span className="win-history">
        A's WINS : {winCount.A}
        <br />
        B's WINS : {winCount.B}
      </span>

      <button className="btn" onClick={restartGame}>
        RESTART GAME
      </button>
      <button className="btn" onClick={clearHistory}>
        CLEAR HISTORY
      </button>
    </div>
  );
}

export default EndGame;