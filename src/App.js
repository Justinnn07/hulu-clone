import React, { useState } from 'react';
import Nav from './Nav';
import './App.css';
import Header from './Header';
import Results from './Results';
import request from "./request"

function App() {

  const [selectedOption, setSelectedOption] = useState(request.fetchTrending);

  return (
    <div className="App">
      {/* Header */}

        <Header />

      {/* Nav */}

         <Nav setSelectedOption={setSelectedOption}/>

      {/* Result */}

      <Results selectedOption={selectedOption} />

    </div>
  );
}

export default App;
