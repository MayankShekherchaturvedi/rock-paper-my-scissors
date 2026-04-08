import { useState } from 'react';
import './App.css';

function App() {
  const [userMove, setUserMove] = useState("");
  const [computerMove, setComputerMove] = useState("");
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [result, setResult] = useState("Let's play!");
  const [streak, setStreak] = useState(0);
  const [round, setRound] = useState(1);

  const handleClick = (playerChoice) => {

    const randomNum = Math.random();

    let compChoice;
    if (randomNum < 0.34) {
      compChoice = "Rock";
    } else if (randomNum < 0.67) {
      compChoice = "Scissors";
    } else {
      compChoice = "Paper";
    }

    setUserMove(playerChoice);
    setComputerMove(compChoice);

    
    if (playerChoice === compChoice) {
      setResult("It's a tie!");

    } else if (
      (playerChoice === "Rock" && compChoice === "Scissors") ||
      (playerChoice === "Paper" && compChoice === "Rock") ||
      (playerChoice === "Scissors" && compChoice === "Paper")
    ) {
      setResult("You win!");
      setUserScore((prev) => prev + 1);
      setStreak((prev) => prev + 1);
      setRound((p)=>p+1);
    } else {
      setResult("Computer wins!");
      setComputerScore((prev) => prev + 1);
      setStreak(0);
      setRound((p)=>p+1);
    }


  };
    function resetGame() {
      setUserScore(0);
      setComputerScore(0);
      setRound(1);
      setResult("Let's play!");
    }


  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Rock Paper Scissors</h1>
      <p>Round: {round}</p>

      <div className="scoreboard">
        <h2>PC: {computerScore} | Player: {userScore}</h2>
      </div>

      <p>Choose your weapon:</p>
      <button onClick={() => handleClick("Rock")}>🗿</button>
      <button onClick={() => handleClick("Paper")}>🧻</button>
      <button onClick={() => handleClick("Scissors")}>✂️</button>

      <div style={{ marginTop: '20px' }}>
        <p>You chose: <strong>{userMove}</strong></p>
        <p>PC chose: <strong>{computerMove}</strong></p>
        <hr />
        <h3>{result}</h3>
        <hr />
        <h3>Win-Streak: {streak}</h3>
        <button onClick={resetGame}>Reset Game</button>
      </div>
    </div>
  );
}

export default App;