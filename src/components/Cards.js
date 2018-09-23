import React from "react";
import fruits from "./fruits.json";
import Counter from "./Counter"

const styles = {
    card: {
        width: 100,
        margin: 15
    },
    pictures: {
        width: 600,
        float: "right"
    }
};

let clickedArray = [];
let unclickedArray = ["apple", "blueberry", "grapes", "watermelon", "mango", "peach", "lime", "lemon", "orange", "pear", "strawberry", "avocado"];

class Cards extends React.Component {
    state = {
        count: 0,
        maxCount: 0
    };

    handleIncrement() {
        let clicks = this.state.count + 1;
        let record = this.state.maxCount;
        this.setState({ count: clicks });
        if (clicks > record) {
            this.setState({ maxCount: clicks })
        }
    };

    restartGame() {
        this.setState(() => ({
            count: 0
        }));
        clickedArray = [];
        unclickedArray = ["apple", "blueberry", "grapes", "watermelon", "mango", "peach", "lime", "lemon", "orange", "pear", "strawberry", "avocado"];
    }

    updateCounters = fruit => {
        if (clickedArray.indexOf(fruit) !== -1) {
            this.restartGame();
            alert("Try again!");
        }
        else {
            this.handleIncrement();
            clickedArray.push(fruit);
            let target = unclickedArray.indexOf(fruit);
            unclickedArray.splice(target, 1);
            if (unclickedArray.length === 0) {
                alert("You won! Good for you for eating all of your fruit!");
                this.restartGame();
            }
        }
    }

    render() {
        return (
            <div style={styles.pictures}>
                <img style={styles.card} src={fruits[0].image} alt={fruits[0].name} onClick={() => {
                    this.setState({ clicked: true });
                    this.updateCounters(fruits[0].name);
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
                    this.updateCounters(fruits[1].name);
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
                    this.updateCounters(fruits[2].name);
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
                    this.updateCounters(fruits[3].name);
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
                    this.updateCounters(fruits[4].name);
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
                    this.updateCounters(fruits[5].name);
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
                    this.updateCounters(fruits[6].name);
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
                    this.updateCounters(fruits[7].name);
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
                    this.updateCounters(fruits[8].name);
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
                    this.updateCounters(fruits[9].name);
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
                    this.updateCounters(fruits[10].name);
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
                    this.updateCounters(fruits[11].name);
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
                <Counter count={this.state.count} maxCount={this.state.maxCount} />
            </div>
        )
    }
}

export default Cards;