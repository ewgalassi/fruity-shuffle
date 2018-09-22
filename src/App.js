import React from 'react';
import './App.css';
import Cards from "./components/Cards";
import Counter from "./components/Counter";
import fruits from "./components/fruits.json";

class App extends React.Component {
  state = {
    fruits
  }

  render() {
    return (
      <div className="container">
        <header className="App-header">
          <h1 className="title">Do the <strong>Fruity Shuffle</strong></h1>
          <h4>Click on each fruit only once!  See if you can get them all</h4>
        </header>
        <Cards
        />
        <Counter />
      </div>
    );
  }
}

export default App;
