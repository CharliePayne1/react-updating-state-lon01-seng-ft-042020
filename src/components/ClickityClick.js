// Code ClickityClick Component Here
import React from 'react'

export default class ClickityClick extends React.Component {

    state = {
        hasBeenClicked: false
    }

    handleClick = () => {
        this.setState({
            hasBeenClicked: !this.state.hasBeenClicked
        })
    }


  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>{this.state.hasBeenClicked ? "OFF" : "ON"}</button>
      </div>
    )
  }
}