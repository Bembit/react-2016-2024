import React from 'react';
import Callback from './Callback';
import Mutable from './Mutable';
import Lottery from './lottery/Lottery';
import Flipper from './coin/Flipper';
import BoxContainer from './colorboxes/BoxContainer';

function App() {
  return (
    <div>
      <BoxContainer />
      <Flipper />
      <Lottery />
      <Lottery title={'Mini Lottery'} maxNum={10} numBalls={4} />
      <Lottery title={'Hungarian'} maxNum={99} numBalls={5} />
      <Mutable />
      <Callback />
    </div>
  );
}

export default App;
