import React from "react";
import fruits from "./fruits.json";

const styles = {
    card: {
      width: 200,
    }
  };

class Cards extends React.Component {

    state = {
        clicked: false
    };

    // shuffle = arr => {

    // };


    render() {
        return (
            // fruits.map(f => {
            <div>
                <img style={styles.card} src={fruits[0].image} onClick={() => {
                    this.setState({ clicked: true });
                    let i = 0
                        , j = 0
                        , temp = null

                    for (i = fruits.length - 1; i > 0; i -= 1) {
                        j = Math.floor(Math.random() * (i + 1))
                        temp = fruits[i]
                        fruits[i] = fruits[j]
                        fruits[j] = temp
                    };
                }} />
                <img style={styles.card} src={fruits[1].image} onClick={() => {
                    this.setState({ clicked: true });
                    let i = 0
                        , j = 0
                        , temp = null

                    for (i = fruits.length - 1; i > 0; i -= 1) {
                        j = Math.floor(Math.random() * (i + 1))
                        temp = fruits[i]
                        fruits[i] = fruits[j]
                        fruits[j] = temp
                    };
                }} />
                <img style={styles.card} src={fruits[2].image} onClick={() => {
                    this.setState({ clicked: true });
                    let i = 0
                        , j = 0
                        , temp = null

                    for (i = fruits.length - 1; i > 0; i -= 1) {
                        j = Math.floor(Math.random() * (i + 1))
                        temp = fruits[i]
                        fruits[i] = fruits[j]
                        fruits[j] = temp
                    };
                }} />
                <img style={styles.card} src={fruits[3].image} onClick={() => {
                    this.setState({ clicked: true });
                    let i = 0
                        , j = 0
                        , temp = null

                    for (i = fruits.length - 1; i > 0; i -= 1) {
                        j = Math.floor(Math.random() * (i + 1))
                        temp = fruits[i]
                        fruits[i] = fruits[j]
                        fruits[j] = temp
                    };
                }} />
                <img style={styles.card} src={fruits[4].image} onClick={() => {
                    this.setState({ clicked: true });
                    let i = 0
                        , j = 0
                        , temp = null

                    for (i = fruits.length - 1; i > 0; i -= 1) {
                        j = Math.floor(Math.random() * (i + 1))
                        temp = fruits[i]
                        fruits[i] = fruits[j]
                        fruits[j] = temp
                    };
                }} />
                <img style={styles.card} src={fruits[5].image} onClick={() => {
                    this.setState({ clicked: true });
                    let i = 0
                        , j = 0
                        , temp = null

                    for (i = fruits.length - 1; i > 0; i -= 1) {
                        j = Math.floor(Math.random() * (i + 1))
                        temp = fruits[i]
                        fruits[i] = fruits[j]
                        fruits[j] = temp
                    };
                }} />
                <img style={styles.card} src={fruits[6].image} onClick={() => {
                    this.setState({ clicked: true });
                    let i = 0
                        , j = 0
                        , temp = null

                    for (i = fruits.length - 1; i > 0; i -= 1) {
                        j = Math.floor(Math.random() * (i + 1))
                        temp = fruits[i]
                        fruits[i] = fruits[j]
                        fruits[j] = temp
                    };
                }} />
                <img style={styles.card} src={fruits[7].image} onClick={() => {
                    this.setState({ clicked: true });
                    let i = 0
                        , j = 0
                        , temp = null

                    for (i = fruits.length - 1; i > 0; i -= 1) {
                        j = Math.floor(Math.random() * (i + 1))
                        temp = fruits[i]
                        fruits[i] = fruits[j]
                        fruits[j] = temp
                    };
                }} />
                <img style={styles.card} src={fruits[8].image} onClick={() => {
                    this.setState({ clicked: true });
                    let i = 0
                        , j = 0
                        , temp = null

                    for (i = fruits.length - 1; i > 0; i -= 1) {
                        j = Math.floor(Math.random() * (i + 1))
                        temp = fruits[i]
                        fruits[i] = fruits[j]
                        fruits[j] = temp
                    };
                }} />
                <img style={styles.card} src={fruits[9].image} onClick={() => {
                    this.setState({ clicked: true });
                    let i = 0
                        , j = 0
                        , temp = null

                    for (i = fruits.length - 1; i > 0; i -= 1) {
                        j = Math.floor(Math.random() * (i + 1))
                        temp = fruits[i]
                        fruits[i] = fruits[j]
                        fruits[j] = temp
                    };
                }} />
                <img style={styles.card} src={fruits[10].image} onClick={() => {
                    this.setState({ clicked: true });
                    let i = 0
                        , j = 0
                        , temp = null

                    for (i = fruits.length - 1; i > 0; i -= 1) {
                        j = Math.floor(Math.random() * (i + 1))
                        temp = fruits[i]
                        fruits[i] = fruits[j]
                        fruits[j] = temp
                    };
                }} />
                <img style={styles.card} src={fruits[11].image} onClick={() => {
                    this.setState({ clicked: true });
                    let i = 0
                        , j = 0
                        , temp = null

                    for (i = fruits.length - 1; i > 0; i -= 1) {
                        j = Math.floor(Math.random() * (i + 1))
                        temp = fruits[i]
                        fruits[i] = fruits[j]
                        fruits[j] = temp
                    };
                }} />
            </div>
            // })
        )
    }
}

export default Cards;
