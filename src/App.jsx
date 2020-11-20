import React from 'react';

import './App.css';

import Beast from './Beast';
import CounterClass from './CounterClass';
import CounterHook from './CounterHook';
import Responsive from './Responsive';
import ResponsiveWithCustomHook from './ResponsiveWithCustomHook';
import Theme from './Theme';

const COLORS = [
    'red', 'green', 'blue', 'yellow', 'orange'
];

export const getRandomColor = () => {
    return COLORS[Math.floor(Math.random() * COLORS.length)];
};

export const AppContext = React.createContext({});

const reducers = (state, action) => {
    if (action.type === 'theme') {
        return {
            ...state,
            theme: action.value
        };
    }
    return state;
};

const App = () => {
    const [appState, dispatch] = React.useReducer(reducers, { theme: getRandomColor() });

    return (
        <div className="App">
            <AppContext.Provider value={{ theme: appState.theme, dispatch }}>
                <CounterClass/>
                <CounterHook/>

                <Beast />

                <Responsive />
                <ResponsiveWithCustomHook />

                <Theme />
            </AppContext.Provider>
        </div>
    );
}

export default App;
