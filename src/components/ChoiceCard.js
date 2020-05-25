import React, { Component } from 'react'

export default class ChoiceCard extends Component {
    render() {
        return (
            <div
  className={`choice-card box ${this.props.winner ? 'winner' : 'loser'}`}
>
  <h2 className="img">{this.props.title}</h2>
  <div className="img">
  <img src={this.props.imgURL} alt={this.props.title}/></div>
  <h3 className="img">{this.props.winner ? 'Won' : 'Loss'}</h3>
</div>
        )
    }
}

