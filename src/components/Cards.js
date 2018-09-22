import React from "react";
import fruits from "./fruits.json";

const styles = {
    card: {
        width: 100,
    }
};

class Cards extends React.Component {
    render() {
        return (
            <div>
                <img style={styles.card} src={fruits[0].image} alt={fruits[0].name} onClick={() => {
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
                <img style={styles.card} src={fruits[1].image} alt={fruits[1].name} onClick={() => {
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
                <img style={styles.card} src={fruits[2].image} alt={fruits[2].name} onClick={() => {
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
                <img style={styles.card} src={fruits[3].image} alt={fruits[3].name} onClick={() => {
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
                <img style={styles.card} src={fruits[4].image} alt={fruits[4].name} onClick={() => {
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
                <img style={styles.card} src={fruits[5].image} alt={fruits[5].name} onClick={() => {
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
                <img style={styles.card} src={fruits[6].image} alt={fruits[6].name} onClick={() => {
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
                <img style={styles.card} src={fruits[7].image} alt={fruits[7].name} onClick={() => {
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
                <img style={styles.card} src={fruits[8].image} alt={fruits[8].name} onClick={() => {
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
                <img style={styles.card} src={fruits[9].image} alt={fruits[9].name} onClick={() => {
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
                <img style={styles.card} src={fruits[10].image} alt={fruits[10].name} onClick={() => {
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
                <img style={styles.card} src={fruits[11].image} alt={fruits[11].name} onClick={() => {
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
        )
    }
}

export default Cards;
