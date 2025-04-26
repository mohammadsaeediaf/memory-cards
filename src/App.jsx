import "./css/App.css";

function App() {
  return (
    <div className="game-board">
      <div className="card" id="card1">
        <div className="card-inner">
          <div className="card-front">❓</div>
          <div className="card-back">🐶</div>
        </div>
      </div>
      <div className="card" id="card2">
        <div className="card-inner">
          <div className="card-front">❓</div>
          <div className="card-back">🐶</div>
        </div>
      </div>
      <div className="card" id="card3">
        <div className="card-inner">
          <div className="card-front">❓</div>
          <div className="card-back">🐱</div>
        </div>
      </div>
      <div className="card" id="card4">
        <div className="card-inner">
          <div className="card-front">❓</div>
          <div className="card-back">🐱</div>
        </div>
      </div>
      <div className="card" id="card5">
        <div className="card-inner">
          <div className="card-front">❓</div>
          <div className="card-back">🐰</div>
        </div>
      </div>
      <div className="card" id="card6">
        <div className="card-inner">
          <div className="card-front">❓</div>
          <div className="card-back">🐰</div>
        </div>
      </div>
    </div>
  );
}

export default App;
