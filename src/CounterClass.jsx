import React from 'react';

class CounterClass extends React.Component {
    state = {
        count: 0
    }

    render() {
        return (
            <>
                <h3>Counter Class</h3>
                <div>Count: {this.state.count}</div>
                <button onClick={() => this.setState((state) => ({ count: state.count + 1 }))}>+</button>
                <button onClick={() => this.setState((state) => ({ count: state.count - 1 }))}>-</button>
            </>
        );
    }
}

export default CounterClass;
