import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
    // state = { count: 0 };

    increment = () => {
        // this.setState({
        //     count: this.state.count + 1
        // });

        this.props.dispatch({ type: "INCREMENT" });
    };

    decrement = () => {
        // this.setState({
        //     count: this.state.count - 1
        // });

        this.props.dispatch({ type: "DECREMENT" });
    };

    render() {
        return (
            <div className="counter">
                <h1>Counter</h1>
                <div>
                    <button onClick={this.decrement}>&ndash;</button>
                    {/* <span className="count">{this.state.count}</span> */}
                    <span className="count">{this.props.count}</span>
                    <button onClick={this.increment}>+</button>
                </div>
            </div>
        );
    };
}

const mapStateToProps = state => ({
    count: state.count
});

export default connect(mapStateToProps)(Counter);