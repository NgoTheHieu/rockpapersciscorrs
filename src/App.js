import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Box from "./components/Box"
import List from "./components/List"
import ChoiceCard from "./components/ChoiceCard"
import Button from "./components/Button"
export const getRandomChoice = () => {
  let choiceNames = Object.keys(CHOICES); // returns an array of the keys, so: ['scissors', 'paper', 'rock']
  let randomIndex = Math.floor(Math.random() * 3); // either 0, 1, or 2
  let choiceName = choiceNames[randomIndex];
  return CHOICES[choiceName];
};
export const getRoundOutcome = userChoice => {
  
  const computerChoice = getRandomChoice().name;
  let result;

  if (userChoice === "rock") {
    result = computerChoice === "scissors" ? "Victory!" : "Defeat!";
  }
  if (userChoice === "paper") {
    result = computerChoice === "rock" ? "Victory!" : "Defeat!";
  }
  if (userChoice === "scissors") {
    result = computerChoice === "paper" ? "Victory!" : "Defeat!";
  }

  if (userChoice === computerChoice) result = "Tie game!";
  return [result, computerChoice];
};
const choices = {
  rock:
    "https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png",
  paper: "http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png",
  scissors: "http://www.pngmart.com/files/1/Scissors-PNG-Pic.png"
};
const [prompt, setGamePrompt] = useState("1, 2, 3, SHOOT!");
const onPlayerChoose = playerChoice => {
  const [result, compChoice] = getRoundOutcome(playerChoice);
};
function App() {

  return (
    <div className="App">
      <div className="container">
    <div className="row mb-3">
      <div className="col-md-8 themed-grid-col">
      </div>
    </div>
  </div>
      <div className="img">
  <ChoiceCard title="Computer" color="red" winner={false} imgURL={choices.rock} />
  <ChoiceCard title="You" color="green" winner={true} imgURL={choices.paper} />
      </div>
      <h1>{prompt}</h1>
  <Button title="" color=""  />
</div>
  );
}

export default App;
