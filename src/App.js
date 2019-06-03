import React from 'react';
import TextButton from 'wix-style-react/TextButton';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TextButton as="a" href="https://wix-wix-style-react.surge.sh/" target="_blank">
          Check out the docs
        </TextButton>
      </header>
    </div>
  );
}

export default App;
