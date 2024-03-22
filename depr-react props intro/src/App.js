import React, {Component} from 'react';
import Machine from './Machine';
import Friend from './Friend';
import Hello from './Hello';

import State from './State';
import RandoState from './RandoState';
import Clicker from './Clicker';
import BrokenClick from './BrokenClick';
import StateClicker from './StateClicker';

import Foods from './Foods';
import {choice, remove} from './Helpers'

class App extends Component {
  render() {

    const randomPick = choice(Foods);
    console.log(randomPick);

    const remaining = remove(Foods, randomPick);

    return (
      <div className="App">
        <StateClicker />
        <BrokenClick />
        <Clicker />
        <RandoState maxNum={7} />
        <State animal="Cat" food="Pineapple" /> 
        <div>Random pick from array is: {randomPick}</div>
        <div>Length of remaining array: {remaining.length}</div>

        <Hello 
          from="Me"
          to="You"
          bangs={125}
        />
        <Hello 
          to="Unknown"
        />
        <Friend 
          name="Elton"
          hobbies={['piano', 'singing', 'dancing']}
        />
        <Friend 
          name="Frida"
          hobbies={['drawing', 'painting', 'coding']}
        />
  
        <h1>Slot Machine</h1>
        <Machine
          s1="x"
          s2="y"
          s3="z"
        />
        <Machine
          s1="x"
          s2="x"
          s3="x"
        />
      </div>
    );
  }
}

export default App;