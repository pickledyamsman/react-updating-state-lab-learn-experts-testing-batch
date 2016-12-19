import React from 'react';

class DigitalClicker extends React.Component {
  constructor() {
    super();
 
    this.state = {
      timesClicked: 0
    }

    this.incrementClicked = this.incrementClicked.bind(this);
  }


  incrementClicked(){
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
  }

  render(){
    return (
      <button onClick={this.incrementClicked}>{this.state.timesClicked}</button>
    )
  }
}

module.exports = DigitalClicker;