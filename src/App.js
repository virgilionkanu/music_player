import React from 'react';

import './styles/App.scss';

import Player from './components/Player';
import Song from './components/Song'

const App = () => {
  return (
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;
