import React from 'react';
import {AppContext} from './App';

const Counter = () => {
    const [count, updateCount] = React.useState(0);
    const { theme } = React.useContext(AppContext);

    return (
        <>
            <h3>Counter Hook</h3>
            <div>Count: {count}</div>
            <div>{theme}</div>
            <button onClick={() => updateCount(count + 1)}>+</button>
            <button onClick={() => updateCount(count - 1)}>-</button>
        </>
    );
};

export default Counter;
