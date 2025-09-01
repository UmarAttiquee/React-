import React, { useState,useEffect } from "react";

function Game() {
  const [yourChoice, setYourChoice] = useState("");
  const [compChoice, setCompChoice] = useState("");
  const [result, setResult] = useState("");

  const [win, setWin] = useState(0);
  const [lose, setLose] = useState(0);
  const [tie, setTie] = useState(0);

  const choices = ["rock", "paper", "scissors"];

  function fun(value) {
    setYourChoice(value);

    const compIndex = Math.floor(Math.random() * choices.length);
    const compSelected = choices[compIndex];
    setCompChoice(compSelected);

    if (value === compSelected) {
      setResult("It's a tie!");
      setTie((prev) => prev + 1);
    } else if (
      (value === "rock" && compSelected === "scissors") ||
      (value === "paper" && compSelected === "rock") ||
      (value === "scissors" && compSelected === "paper")
    ) {
      setResult("You Win!");
      setWin((prev) => prev + 1);
    } else {
      setResult("You Lose!");
      setLose((prev) => prev + 1);
    }
  }


useEffect(() => {
  if (result) {
    const timer = setTimeout(() => {
      setCompChoice("");
      setYourChoice("");
      setResult("");
    }, 2000);

    return () => clearTimeout(timer);  // Cleanup on unmount or before next effect
  }
}, [result]);


  return (
    <>
      <h1>Game</h1>
      <h2>You Selected: {yourChoice}</h2>
      <h3>Computer Selected: {compChoice}</h3>
      <h2>{result}</h2>

      <button onClick={() => fun("paper")}>
        <img
          style={{ height: "200px" }}
          src="assets/img/img/paper.jpeg"
          alt="Paper"
        />
      </button>
      <button onClick={() => fun("rock")}>
        <img
          style={{ height: "200px" }}
          src="assets/img/img/rock.jpeg"
          alt="Rock"
        />
      </button>
      <button onClick={() => fun("scissors")}>
        <img
          style={{ height: "200px" }}
          src="assets/img/img/sizer.jpeg"
          alt="Scissors"
        />
      </button>

      <p>No. of Wins: {win}</p>
      <p>No. of Losses: {lose}</p>
      <p>No. of Ties: {tie}</p>
    </>
  );
}

export default Game;
