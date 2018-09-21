import React from "react";

class Counter extends React.Component {
    state = {
        count: 0,
        maxCount: 0
    };

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
      };

    render() {
        return (
            <table className="counter">Lorem Ipsum and a bunch of yada yada yada</table>
    );
    }
}

export default Counter;