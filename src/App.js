import React from 'react';
import './App.css';
import Cards from "./components/Cards";
import fruits from "./components/fruits.json";

const styles = {
  index: {
    textAlign: "center",
    backgroundColor: "gray",
    float: "left",
    width: 400,
    height: 300,
    borderRadius: 10,
    marginTop: 30
  },
  text: {
    marginTop: 10,
    fontFamily: "Comic Sans MS"
  }
};

class App extends React.Component {
  state = {
    fruits
  }

  render() {
    return (
      <div className="container">
        <header style={styles.index}>
          <h2 style={styles.text} className="title">Do the</h2><br></br>
          <h1 style={styles.text} className="title">Fruity Shuffle</h1><br></br>
          <h4 style={styles.text} className="title">Click on each fruit only once!</h4><br></br>
          <h4 style={styles.text} className="title">See if you can get them all</h4>
        </header>
        <Cards />
      </div>
    );
  }
}

export default App;
