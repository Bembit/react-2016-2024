import React, { Component } from 'react';
import './App.css';

const NUM_BOXES = 32;

const Box = ({color}) => {
  const style = {
    width: '180px',
    height: '180px',
    display: 'inline-block',
    backgroundColor: color
  }
    return <div style={style} />;
};

class App extends Component {

  constructor(props) {
    super(props);
    const boxes = Array(NUM_BOXES).fill().map(this.getRandomColor, this);
    this.state = {boxes};

    setInterval(() => {
      const boxes = this.state.boxes.slice();
      const randIndex = Math.floor(Math.random() * boxes.length);
      boxes[randIndex] = this.getRandomColor();
      this.setState({boxes});
    }, 300);
  }


  getRandomColor() {
    let colorIndex = Math.floor(Math.random() * this.props.allColors.length);
    return this.props.allColors[colorIndex];
  }

  render() {
    const boxes = this.state.boxes.map((color, index) => (
        <Box key={index} color={color} />
      ));

      return(
        <div className="app">
          {boxes}
        </div>
        ); 
    }
}

App.defaultProps = {
  allColors: [
            "Black","Silver","Gray","White","Maroon",
            "Red","Purple","Green","Lime","Olive",
            "Yellow","Navy","Blue","Teal","Aqua",
            "Orange","Aliceblue","Aquamarine","Azure","Beige",
            "Blueviolet","Brown","Cadetblue","Chocolate","Coral",
            "Crimson","Darkblue","Darkcyan","Darkgoldenrod","Darkgray",
            "Darkgreen","Darkgrey","Darkmagenta","Darkorange","Darkred",
            "Darksalmon","Darkseagreen","Darkslateblue","Darkviolet","Deeppink",
            "Deepskyblue","Firebrick","Floralwhite","Gold","Khaki",
            ]
};

export default App;