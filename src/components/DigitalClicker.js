// Code DigitalClicker Component Here
import React from "react";

export default class extends React.Component {
  constructor() {
    super();
    this.state = {
      timesClicked: 0,
    };
  }

//   handleClick = event => {
//       let newCount = this.state.timesClicked + 1
//         this.setState({
//         timesClicked: newCount  
//       })
//   }
  handleClick = event => {
      this.setState(prevState => ({
          timesClicked: prevState.timesClicked + 1
      }))
  }
  render () {
      return (
          <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      )
  }
}
