import React from 'react';
import Button from './Components/button';
import SearchBar from './Components/SearchBar';
import Feedback from './Components/GiveFeedback';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button />
        <SearchBar />
        <Feedback />
      </header>
    </div>
  );
}

export default App;