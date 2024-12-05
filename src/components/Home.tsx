import { useState, useEffect } from "react";
import { fetchRandomImages, resetSeenPairs } from "../utils/fetchImages";
import GameOverModal from "./GameOver";
import "../styles/home.css";

const Home: React.FC = () => {
  const [isGameStarted, setIsGameStarted] = useState<boolean>(false);
  const [images, setImages] = useState<string[]>([]);
  const [streak, setStreak] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);

  const loadImages = async () => {
    const newImages = await fetchRandomImages();
    console.log(newImages)
    console.log(import.meta.env.VITE_MAX_IMAGES)
    setImages(newImages);
  };

  const startGame = () => {
    resetSeenPairs();
    setStreak(0);
    setGameOver(false);
    loadImages()
    setIsGameStarted(true);
  };

  const handleImageClick = (selectedImage: string) => {
    const isCorrect = selectedImage.includes("AI");

    if (isCorrect) {
      setStreak((prev) => prev + 1);
      loadImages();
    } else {
      setGameOver(true);
    }
  };

  useEffect(() => {
    if (isGameStarted) {
      loadImages();
    }
  }, [isGameStarted]);

  return (
    <div className="home-container">
      {!isGameStarted ? (
        <div className="intro-section">
          <h1 className="intro-heading">AI or NOT</h1>
          <p className="intro-description">
            Think you can outsmart AI?😏<br/>Play this game to find out!
          </p>
          <button className="start-btn" onClick={startGame}>
            Start Game
          </button>
        </div>
      ) : (
        <div className="game-container">
          {gameOver ? (
            <GameOverModal streak={streak} onRestart={startGame} />
          ) : (
            <>
              <h2>Current Streak: {streak}</h2>
              <p>Click on the image which
              you think is is AI-generated!</p>
              <div className="images-container">
                {images.map((image, index) => (
                  <button
                    key={index}
                    className="image-btn"
                    onClick={() => handleImageClick(image)}
                  >
                    <img src={image} alt={`Option ${index + 1}`} />
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;