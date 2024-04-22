import React, { Component } from 'react';
import './App.css';

const NUM_BOXES = 63; // photos.length

const Box = ({photo}) => {
  const style = {
    width: '100px',
    height: '100px',
    display: 'inline-block',
    backgroundImage: `url(${photo})`,
    backgroundSize: 'cover',
    margin: '2.5px',
    border: '5px solid black'
  }
    return <div style={style} />;
};

class App extends Component {

  constructor(props) {
    super(props);
    const boxes = Array(NUM_BOXES).fill().map(this.getRandomphoto, this);
    this.state = {boxes};

    setInterval(() => {
      const boxes = this.state.boxes.slice();
      const randIndex = Math.floor(Math.random() * boxes.length);
      boxes[randIndex] = this.getRandomphoto();
      this.setState({boxes});
    }, 100);
  }

  componentDidMount() {
    const randomUser = 'https://randomuser.me/api/?results=64'
    const getAll = () =>
    fetch(randomUser)
      .then(res => res.json())
      .then(data => data)


    getAll()
    .then(users => {
      this.setState({ users: users });
      console.log(users)
      return users
    })
  }


  getRandomphoto() {
    let photoIndex = Math.floor(Math.random() * this.props.allphotos.length);
    return this.props.allphotos[photoIndex];
  }

  render() {
    const boxes = this.state.boxes.map((photo, index) => (
        <Box key={index} photo={photo} />
      ));

      return(
        <div className="app">
          {boxes}
        </div>
        ); 
    }
}

App.defaultProps = {
  // this was fun
  allphotos: [
            "https://randomuser.me/api/portraits/thumb/men/1.jpg",
            "https://randomuser.me/api/portraits/thumb/men/2.jpg",
            "https://randomuser.me/api/portraits/thumb/men/3.jpg",
            "https://randomuser.me/api/portraits/thumb/men/4.jpg",
            "https://randomuser.me/api/portraits/thumb/men/5.jpg",
            "https://randomuser.me/api/portraits/thumb/men/6.jpg",
            "https://randomuser.me/api/portraits/thumb/men/7.jpg",
            "https://randomuser.me/api/portraits/thumb/men/8.jpg",
            "https://randomuser.me/api/portraits/thumb/men/9.jpg",
            "https://randomuser.me/api/portraits/thumb/men/10.jpg",
            "https://randomuser.me/api/portraits/thumb/men/11.jpg",
            "https://randomuser.me/api/portraits/thumb/men/12.jpg",
            "https://randomuser.me/api/portraits/thumb/men/13.jpg",
            "https://randomuser.me/api/portraits/thumb/men/14.jpg",
            "https://randomuser.me/api/portraits/thumb/men/15.jpg",
            "https://randomuser.me/api/portraits/thumb/men/16.jpg",
            "https://randomuser.me/api/portraits/thumb/men/17.jpg",
            "https://randomuser.me/api/portraits/thumb/men/18.jpg",
            "https://randomuser.me/api/portraits/thumb/men/19.jpg",
            "https://randomuser.me/api/portraits/thumb/men/20.jpg",
            "https://randomuser.me/api/portraits/thumb/men/21.jpg",
            "https://randomuser.me/api/portraits/thumb/men/22.jpg",
            "https://randomuser.me/api/portraits/thumb/men/23.jpg",
            "https://randomuser.me/api/portraits/thumb/men/24.jpg",
            "https://randomuser.me/api/portraits/thumb/men/25.jpg",
            "https://randomuser.me/api/portraits/thumb/men/26.jpg",
            "https://randomuser.me/api/portraits/thumb/men/27.jpg",
            "https://randomuser.me/api/portraits/thumb/men/28.jpg",
            "https://randomuser.me/api/portraits/thumb/men/29.jpg",
            "https://randomuser.me/api/portraits/thumb/men/30.jpg",
            "https://randomuser.me/api/portraits/thumb/men/31.jpg",
            "https://randomuser.me/api/portraits/thumb/men/32.jpg",
            "https://randomuser.me/api/portraits/thumb/men/33.jpg",
            "https://randomuser.me/api/portraits/thumb/men/34.jpg",
            "https://randomuser.me/api/portraits/thumb/men/35.jpg",
            "https://randomuser.me/api/portraits/thumb/men/36.jpg",
            "https://randomuser.me/api/portraits/thumb/men/37.jpg",
            "https://randomuser.me/api/portraits/thumb/men/38.jpg",
            "https://randomuser.me/api/portraits/thumb/men/39.jpg",
            "https://randomuser.me/api/portraits/thumb/men/40.jpg",
            "https://randomuser.me/api/portraits/thumb/men/41.jpg",
            "https://randomuser.me/api/portraits/thumb/men/42.jpg",
            "https://randomuser.me/api/portraits/thumb/men/43.jpg",
            "https://randomuser.me/api/portraits/thumb/men/44.jpg",
            "https://randomuser.me/api/portraits/thumb/men/45.jpg",
            "https://randomuser.me/api/portraits/thumb/men/46.jpg",
            "https://randomuser.me/api/portraits/thumb/men/47.jpg",
            "https://randomuser.me/api/portraits/thumb/men/48.jpg",
            "https://randomuser.me/api/portraits/thumb/men/49.jpg",
            "https://randomuser.me/api/portraits/thumb/men/50.jpg",
            "https://randomuser.me/api/portraits/thumb/men/51.jpg",
            "https://randomuser.me/api/portraits/thumb/men/52.jpg",
            "https://randomuser.me/api/portraits/thumb/men/53.jpg",
            "https://randomuser.me/api/portraits/thumb/men/54.jpg",
            "https://randomuser.me/api/portraits/thumb/men/55.jpg",
            "https://randomuser.me/api/portraits/thumb/men/56.jpg",
            "https://randomuser.me/api/portraits/thumb/men/57.jpg",
            "https://randomuser.me/api/portraits/thumb/men/58.jpg",
            "https://randomuser.me/api/portraits/thumb/men/59.jpg",
            "https://randomuser.me/api/portraits/thumb/men/60.jpg",
            "https://randomuser.me/api/portraits/thumb/men/61.jpg",
            "https://randomuser.me/api/portraits/thumb/men/62.jpg",
            "https://randomuser.me/api/portraits/thumb/men/63.jpg",
            "https://randomuser.me/api/portraits/thumb/men/64.jpg",
          ]
};

export default App;