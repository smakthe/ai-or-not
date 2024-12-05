interface GameOverModalProps {
  streak: number;
  onRestart: () => void;
}

const GameOver: React.FC<GameOverModalProps> = ({ streak, onRestart }) => {
  return (
    <div className="modal-overlay">
      <div className="game-over-modal">
        <h2>Game Over!</h2>
        <p>Your streak: {streak}</p>
        <p>Nice try! Want to give it another shot?</p>
        <button className="try-again-btn" onClick={onRestart}>Try Again</button>
      </div>
    </div>
  );
};

export default GameOver;