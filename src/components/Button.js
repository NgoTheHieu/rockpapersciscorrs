import React from 'react'

export default function Button() {
    return (
        <div className="container">
  <button
    className="btn btn-success btn-lg"
    onClick={() => onPlayerChoose("rock")}
  >
    Rock
  </button>
  <button
    className="btn btn-success btn-lg"
    onClick={() => onPlayerChoose("paper")}
  >
    Paper
  </button>
  <button
    className="btn btn-success btn-lg"
    onClick={() => onPlayerChoose("scissors")}
  >
    Scissors
  </button>
</div>
    )
}
